import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const promocode = await prisma.promocode;
    const body = await req.json();
    const {id} = body;

    const deleteRank = await promocode.delete({
        where: {id}
    });

    return NextResponse.json({
        code: 200,
        message: "Promocode delete success",
        data: deleteRank
    });
};
