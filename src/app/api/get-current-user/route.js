import { NextResponse } from "next/server";
import { headers } from 'next/headers';
const jwt = require('jsonwebtoken');
import prisma from "@/libs/prisma";

export async function POST(req){
    const headersList = headers();
    const referer = headersList.get("authorization");

    const user = await prisma.user;
    const body = await req.json();
    const {token} = body;

    if(!referer){
        return NextResponse.json({
            code: 401,
            message: "Authorization header is missing",
          });
    };

    if(!token) {
        return NextResponse.json({
            code: 401,
            message: "Token in missing"
        });
    };

    try{
        const decoded = jwt.verify(token, process.env.FFS_JWT_SECRET_LEY);

        console.log(decoded)

        const findUserInDatabase = await user.findUnique({
            where: {id: decoded.userId}
        });

        if(!findUserInDatabase) {
            return NextResponse.json({
                code: 404,
                message: "User not found"
            });
        }

        return NextResponse.json({
            code: 200,
            message: "User ready",
            data: findUserInDatabase
        });

    } catch(error) {
        return NextResponse.json({
            code: 401,
            message: "Invalid token"
        });
    };
}