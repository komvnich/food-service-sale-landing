import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const rank = await prisma.rank;
    const body = await req.json();
    const {data} = body;

    const name = data.name;
    const agency = data.agency;

    const findRankByName = await rank.findFirst({
        where: {
            AND: [
              { agency: agency },
              { name: name }
            ]
          }
    });

    if (findRankByName) {
        return NextResponse.json({
            code: 1001,
            message: "Rank field already exists",
        });
    };

    const createRank = await rank.create({
        data: data,
    });

    return NextResponse.json({
        code: 200,
        message: "Rank successfully created",
        data: createRank,
    });
};
