import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const products = await prisma.product;
    const body = await req.json();
    const {agency} = body;

    const findProductsByAgency = await products.findMany({
        where: {agency}
    });

    if(!findProductsByAgency) {
        return NextResponse.json({
            code: 404,
            message: "Products fields not found"
        });
    }

    return NextResponse.json({
        code: 200,
        message: "Found products by agency",
        data: findProductsByAgency
    });
}