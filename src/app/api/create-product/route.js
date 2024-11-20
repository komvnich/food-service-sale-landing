import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const product = await prisma.product;

  const body = await req.json();
  const { 
        data
    } = body;

  const findProductInDatabase = await product.findFirst({
    where: {
      name: data.name
    },
  });

  if (findProductInDatabase) {
    return NextResponse.json({
      code: 1001,
      message: "Product already exists",
    });
  }

  const createdProduct = await product.create({
    data,
  });

  return NextResponse.json({
    code: 200,
    message: "Product successfully created",
    data: createdProduct,
  });
}
