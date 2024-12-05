import { Router } from "express";
import { check } from "express-validator";
import validacionErrores from "../middlewares/validacionErrores";
import guardarPunteo from "../controllers/punteoController";

// validando los campos de la peticion y su respectivo formato
let validaciones: any = [
    check("correo")
        .notEmpty().withMessage("correo debe tener una longitud mayor a 0")
        .isEmail().withMessage("Debes ingresar un correo valido")
        .isLength({ max: 100 }).withMessage("nombre no puede tener una longitud mayor a 100"),
    check("punteo")
        .isInt().withMessage("Ingresa un punteo valido de 1 a 100"),
    validacionErrores,
];

// creando el enrutador
let router = Router();

// ruta solicitada, primero realiza las validaciones antes de llegar al controlador
router.post("/guardar_punteo", validaciones, guardarPunteo);

export default router;