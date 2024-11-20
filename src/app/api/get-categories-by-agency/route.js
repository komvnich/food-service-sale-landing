import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const categories = await prisma.category;
    const body = await req.json();
    const {agency} = body;

    const findCategoriesByAgency = await categories.findMany({
        where: {agency}
    });

    if(!findCategoriesByAgency) {
        return NextResponse.json({
            code: 404,
            message: "Categories fields not found"
        });
    }

    return NextResponse.json({
        code: 200,
        message: "Found categories by agency",
        data: findCategoriesByAgency
    });
}