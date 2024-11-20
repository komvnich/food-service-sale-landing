import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const category = await prisma.category;
    const body = await req.json();
    const {data} = body;
    
    const createCategory = await category.createMany({
        data,
    });

    return NextResponse.json({
        code: 200,
        message: "Category successfully created",
        data: createCategory,
    });
};
