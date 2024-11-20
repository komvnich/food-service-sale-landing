import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const promocode = await prisma.promocode;

  const body = await req.json();
  const { 
        agency,
        name,
        typeUsed,
        dataUsed, 
        percent
    } = body;

  const findPromocodeInDatabase = await promocode.findFirst({
    where: {
        AND: [
          { agency: agency },
          { name: name }
        ]
      }
  });

  if (findPromocodeInDatabase) {
    return NextResponse.json({
      code: 1001,
      message: "Promocode already exists",
    });
  }

  const createdPromocode = await promocode.create({
    data: {
      agency,
      name,
      percent,
      typeUsed,
      dataUsed
    },
  });

  return NextResponse.json({
    code: 200,
    message: "Promocode successfully created",
    data: createdPromocode,
  });
}
