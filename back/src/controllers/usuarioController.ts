import { PrismaClient, type Prisma } from "@prisma/client";
import type { Request, Response } from "express";

export default async function guardarUsuario(req: Request, res: Response): Promise<any> {
  try {
    let user = await obtenerUsuarioPorEmail(req.body.correo);
    if (user != null) return res.status(400).json("El usuario ya existe");
    if (calcularAniosTranscurridos(convertDate(req.body.fecha)) < 18) return res.status(400).json("El usuario no es mayor de edad, por lo que no puede continuar la operación");

    let newUser = await setearUsuario(req.body);
    return res.status(200).json("Usuario creado con exito, su id es: " +newUser.id);
  } catch (error: any) {
    return res.status(500).json(error.message);
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

async function setearUsuario(body: Prisma.UsuarioCreateInput){
  const client = new PrismaClient();
  let data = await new PrismaClient().usuario.create({
    data: {
      nombre: body.nombre,
      correo: body.correo,
      telefono: Number(body.telefono),
      fecha: convertDate(String(body.fecha)),
      estadoUsuarioId: (body as any).estado,
    },
  });
  client.$disconnect();
  return data;
}

function convertDate(dateString: string): Date {
  return new Date(
    Number(dateString.split("-")[2]),
    Number(dateString.split("-")[1]) - 1,
    Number(dateString.split("-")[0])
  );
}

function calcularAniosTranscurridos(fechaInicio: Date) {
  const fechaHoy = new Date();

  let anios = fechaHoy.getFullYear() - fechaInicio.getFullYear();

  const mesActual = fechaHoy.getMonth();
  const mesInicio = fechaInicio.getMonth();
  const diaActual = fechaHoy.getDate();
  const diaInicio = fechaInicio.getDate();

  if (mesActual < mesInicio || (mesActual === mesInicio && diaActual < diaInicio)) {
    anios--;
  }
  return anios;
}