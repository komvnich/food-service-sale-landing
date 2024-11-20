import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const user = await prisma.user;
    const body = await req.json();
    const {oldPassword, newPassword, id} = body;

    const findUserInDatabase = await user.findUnique({
        where: {
          id
        },
      });

    if(!bcrypt.compareSync(oldPassword, findUserInDatabase.password)){
        return NextResponse.json({
            code: 401,
            message: "The password was entered incorrectly"
        });
    };

    const hashedPassword = await bcrypt.hash(newPassword, 5);

    const updateDataInUser = await user.update({
        where: {id},
        data: {password: hashedPassword}
    });

    return NextResponse.json({
        code: 200,
        message: "The password success upate",
        data: updateDataInUser,
      });
}