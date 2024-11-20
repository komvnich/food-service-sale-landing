import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
const jwt = require('jsonwebtoken');
import { NextResponse } from "next/server";

export async function POST(req) {
    const user = await prisma.user;
    const body = await req.json();
    const {email, password} = body;

    async function updateEnumValues() {
      user.updateMany({
        where: {
          settingTypeOrder: 'client'
        },
        data: {
          settingTypeOrder: 'clients'
        }
      });
    };

    updateEnumValues()
    .catch((e) => console.error(e))

    const findUserInDatabase = await user.findUnique({
        where: {
          email
        },
      });

    if(!findUserInDatabase){
      return NextResponse.json({
        code: 404,
        message: "User not found"
      })
    }

    if(!bcrypt.compareSync(password, findUserInDatabase.password)){
        return NextResponse.json({
            code: 401,
            message: "The password was entered incorrectly"
        });
    };
    const token = jwt.sign({ userId: findUserInDatabase.id }, process.env.FFS_JWT_SECRET_LEY, { expiresIn: '24d' });

    return NextResponse.json({
        code: 200,
        message: "Auth",
        data: {token: token, user: findUserInDatabase},
      });
}