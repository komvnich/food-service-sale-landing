import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const workers = await prisma.worker;
    const body = await req.json();
    const {agency} = body;

    const findWorkersByAgency = await workers.findMany({
        where: {agency}
    });

    if(!findWorkersByAgency) {
        return NextResponse.json({
            code: 404,
            message: "Ranks fields not found"
        });
    }

    return NextResponse.json({
        code: 200,
        message: "Found ranks by agency",
        data: findWorkersByAgency
    });
}