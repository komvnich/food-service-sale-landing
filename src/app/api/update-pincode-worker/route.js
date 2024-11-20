import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const worker = await prisma.worker;
    const body = await req.json();
    const {pincode, id} = body;

    const updateDataInWorker = await worker.update({
        where: {id},
        data: {pincode}
    });

    return NextResponse.json({
        code: 200,
        message: "Update pincode for worker",
        data: updateDataInWorker
    });
}