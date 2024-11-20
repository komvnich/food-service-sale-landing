import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const worker = await prisma.worker;
    const body = await req.json();
    const {data} = body;

    const username = data.username;

    const findWorkerByName = await worker.findFirst({
        where: {
            username
        },
    });

    if (findWorkerByName) {
        return NextResponse.json({
            code: 1001,
            message: "Worker field already exists",
        });
    };

    const createWorker = await worker.create({
        data: data,
    });

    return NextResponse.json({
        code: 200,
        message: "Worker successfully created",
        data: createWorker,
    });
};
