import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const user = await prisma.user;

  const body = await req.json();
  const { 
        email,
        password,
        phone,
        agency,
        longitude,
        latitude,
        placement 
    } = body;

  const hashedPassword = await bcrypt.hash(password, 5);

  const findUserInDatabase = await user.findUnique({
    where: {
      email
    },
  });

  if (findUserInDatabase) {
    return NextResponse.json({
      code: 1001,
      message: "User already exists",
    });
  }

  if (password.length < 6) {
    return NextResponse.json({
      code: 1002,
      message: "Password must be at least 6 characters",
    });
  }

  const createdUser = await user.create({
    data: {
      email,
      password: hashedPassword,
      phone,
      agency,
      longitude,
      latitude,
      placement
    },
  });

  return NextResponse.json({
    code: 200,
    message: "User successfully created",
    data: createdUser,
  });
}
