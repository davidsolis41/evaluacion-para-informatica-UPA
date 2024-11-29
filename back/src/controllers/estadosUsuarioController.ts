import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

export default async function getEstados(req: Request, res: Response): Promise<any>{
    const client = new PrismaClient();
    let data = await client.estadoUsuario.findMany({select: {id: true, titulo: true}});
    if(data == null) return res.status(500).json([]);
    client.$disconnect();
    return res.status(200).json(data);
}