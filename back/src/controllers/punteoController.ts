import { PrismaClient, type Prisma } from "@prisma/client";
import type { Request, Response } from "express";

export default async function guardarPunteo(req: Request, res: Response): Promise<any> {
  try {
    let user = await obtenerUsuarioPorEmail(req.body.correo);
    if(user?.estadoUsuarioId == 2) return res.status(400).json("Usuario dado de baja");
    if (user == null) return res.status(400).json("El usuario no existe, revisar correo");
    if (Number(req.body.punteo) < 1 || Number(req.body.punteo) > 100) return res.status(400).json("El Punteo ingresado debe estar entre 1 y 100");

    await setearPunteo(req.body, user.id);
    return res.status(200).json("Punteo guardado con exito");
  } catch (error: any) {
    return res.status(500).json(error);
  }
}

async function obtenerUsuarioPorEmail(email: string) {
  const client = new PrismaClient();
  let data = await client.usuario.findFirst({
    where: {
      correo: email,
    },
  });
  client.$disconnect();
  return data;
}

async function setearPunteo(body: Prisma.punteo_usuarioCreateInput, id: number){
  const client = new PrismaClient();
  let data = await new PrismaClient().punteo_usuario.create({
    data: {
      idUsuario: id,
      punteo: body.punteo
    },
  });
  client.$disconnect();
  return data;
}