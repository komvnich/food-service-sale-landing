import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const promocodes = await prisma.promocode;
    const body = await req.json();
    const {agency} = body;

    const findPromocodesByAgency = await promocodes.findMany({
        where: {agency}
    });

    if(!findPromocodesByAgency) {
        return NextResponse.json({
            code: 404,
            message: "Promocodes fields not found"
        });
    }

    return NextResponse.json({
        code: 200,
        message: "Found ranks by agency",
        data: findPromocodesByAgency
    });
}