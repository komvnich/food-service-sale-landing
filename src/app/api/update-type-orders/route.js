import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const user = await prisma.user;
    const body = await req.json();
    const {settingTypeOrder, id} = body;

    const updateDataInUser = await user.update({
        where: {id},
        data: {settingTypeOrder}
    });

    return NextResponse.json({
        code: 200,
        message: "Update setting type order",
        data: updateDataInUser
    });
}