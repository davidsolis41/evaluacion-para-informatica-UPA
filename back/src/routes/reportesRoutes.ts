import { Router } from "express";
import obtenerReportePorId from "../controllers/reportesController";

// creando el enrutador
let router = Router();

router.get("/ejecutar_reporte", obtenerReportePorId);

export default router;