import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const category = await prisma.category;
    const body = await req.json();
    const {id} = body;

    const deleteCategory = await category.delete({
        where: {id}
    });

    return NextResponse.json({
        code: 200,
        message: "Category delete success",
        data: deleteCategory
    });
};
