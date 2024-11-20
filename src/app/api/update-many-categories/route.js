import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req) {
    const body = await req.json();
    const { data, agency } = body;

    try {
        const updatePromises = data.map((category) => {
            console.log(category)
            return prisma.category.update({
                where: {
                    id: category.id, // Убедитесь, что передаете правильный id
                },
                data: {
                    title: category.title,
                    key: category.key,
                    children: category.children,
                    updatedAt: new Date(), // Или можете использовать category.updatedAt, если оно передается
                },
            });
        });

        const updateResults = await prisma.$transaction(updatePromises);

        return NextResponse.json({
            code: 200,
            message: "Категории успешно обновлены",
            data: updateResults,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            code: 500,
            message: "Ошибка при обновлении категорий",
            error: error.message,
        });
    }
}
