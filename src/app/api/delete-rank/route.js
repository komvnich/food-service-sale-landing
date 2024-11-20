import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const rank = await prisma.rank;
    const body = await req.json();
    const {id} = body;

    const deleteRank = await rank.delete({
        where: {id}
    });

    return NextResponse.json({
        code: 200,
        message: "Rank delete success",
        data: deleteRank
    });
};
