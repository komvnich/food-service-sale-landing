import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const verified = await prisma.verified;
    const body = await req.json();
    const {email} = body;

        const findVerifiedFieldByEmail = await verified.findFirst({
            where: {email}
        });

        if(!findVerifiedFieldByEmail) {
            return NextResponse.json({
                code: 404,
                message: "Verified field not found"
            });
        }

        return NextResponse.json({
            code: 200,
            message: "Verified ready",
            data: findVerifiedFieldByEmail
        });
}