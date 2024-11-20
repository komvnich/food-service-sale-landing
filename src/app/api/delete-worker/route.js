import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const worker = await prisma.worker;
    const body = await req.json();
    const {id} = body;

    const deleteWorker = await worker.delete({
        where: {id}
    });

    return NextResponse.json({
        code: 200,
        message: "Worker delete success",
        data: deleteWorker
    });
};
