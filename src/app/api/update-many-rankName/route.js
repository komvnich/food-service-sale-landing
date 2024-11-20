import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req){
    const worker = await prisma.worker;
    const rank = await prisma.rank;
    const body = await req.json();
    const {agency, idRank, newName, oldName} = body;

    const updateDataInUser = await rank.update({
        where: {id: idRank},
        data: {name: newName}
    });

    const updateRanksWorker = await worker.findMany({
        where: {
            agency,
            rank: {
                has: oldName
            }
        }
    });

    const updatedWorkers = updateRanksWorker.map(worker => {
        return {
            ...worker,
            rank: worker.rank.map(str => str === oldName ? newName : str)
        };
    });

    await Promise.all(updatedWorkers.map(async (w) => {
        await worker.update({
            where: { id: w.id },
            data: { rank: w.rank }
        });
    }));

    return NextResponse.json({
        code: 200,
        message: "Update setting type order",
        data: {updateWorkers: updatedWorkers, updateRank: updateDataInUser}
    });
}