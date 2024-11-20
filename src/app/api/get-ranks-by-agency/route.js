import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const rank = await prisma.rank;
    const body = await req.json();
    const {agency} = body;

    const findRanksByAgency = await rank.findMany({
        where: {agency}
    });

    if(!findRanksByAgency) {
        return NextResponse.json({
            code: 404,
            message: "Ranks fields not found"
        });
    }

    return NextResponse.json({
        code: 200,
        message: "Found ranks by agency",
        data: findRanksByAgency
    });
}