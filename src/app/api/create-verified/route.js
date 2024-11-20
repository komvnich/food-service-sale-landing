import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const verified = await prisma.verified;

  const body = await req.json();
  const { 
    data
    } = body;

    const email = data.email

  const findVerifiedField = await verified.findFirst({
    where: {
      email
    },
  });


  if (findVerifiedField) {
    return NextResponse.json({
      code: 1001,
      message: "Verified field already exists",
    });
  }

  const createVerifiedRequest = await verified.create({
    data: data,
  });

  return NextResponse.json({
    code: 200,
    message: "Verified request successfully created",
    data: createVerifiedRequest,
  });
}
