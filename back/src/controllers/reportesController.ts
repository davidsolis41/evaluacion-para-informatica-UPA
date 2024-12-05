import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

export default async function obtenerReportePorId(
  req: Request,
  res: Response
): Promise<any> {
  if (
    req.query.reporte != "todos" &&
    req.query.reporte != "hoy" &&
    req.query.reporte != "ayer" &&
    req.query.reporte != "top"
  ) return res.status(500).json("Ocurrio un error inesperado");

  let reporte = res.status(200).json(await obtenerReporte(req.query.reporte));
  return reporte;
}

async function obtenerReporte(id: "todos" | "hoy" | "ayer" | "top"): Promise<any> {
  const client = new PrismaClient();
  let data: any = [];

  if(id == "top") data = await obtenerTop(client);
  if(id == "todos") data = await obtenerTodos(client);
  if (id == "hoy") data = await obtenerHoy(client);
  if (id == "ayer") data = await obtenerAyer(client)

  client.$disconnect();
  return data;
}

async function obtenerTop(client: PrismaClient){
  return await client.usuario.findMany({
    select: {
      id: true,
      nombre: true,
      telefono: true
    },
    take: 3,
    orderBy: {
      punteo: {
        _count: "asc"
      }
    }
  });
}

async function obtenerTodos(client: PrismaClient){
  return await client.usuario.findMany({
    select: {
      id: true,
      nombre: true,
      telefono: true
    }
  });
}

async function obtenerHoy(client: PrismaClient){
  const inicio = new Date();
    inicio.setHours(0, 0, 0, 0);
    const fin = new Date();
    fin.setHours(23, 59, 59, 999);
    return await client.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        telefono: true
      },
      where: {
        creacion: {
          gte: inicio,
          lte: fin,
        },
      },
    });
}

async function obtenerAyer(client: PrismaClient){
  let hoy = new Date();
  const inicio = new Date();
  inicio.setDate(hoy.getDate() - 1);
  inicio.setHours(0, 0, 0, 0);
  const fin = new Date();
  fin.setDate(hoy.getDate() - 1);
  fin.setHours(23, 59, 59, 999);
  return await client.usuario.findMany({
    select: {
      id: true,
      nombre: true,
      telefono: true
    },
    where: {
      creacion: {
        gte: inicio,
        lte: fin,
      },
    },
  });
}