import { Router } from "express";
import { check } from "express-validator";
import validacionErrores from "../middlewares/validacionErrores";
import guardarUsuario from "../controllers/usuarioController";
import getEstados from "../controllers/estadosUsuarioController";

// validando los campos de la peticion y su respectivo formato
let validaciones: any = [
    check("nombre")
        .notEmpty().withMessage("nombre debe tener una longitud mayor a 0")
        .matches(/^[A-Za-z]+$/).withMessage("nombre debe contener solo letras")
        .isLength({ max: 100 }).withMessage("nombre no puede tener una longitud mayor a 100"),
    check("fecha")
        .notEmpty().withMessage("fecha debe tener una longitud mayor a 0")
        .matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/).withMessage("Debes ingresar una fecha valida dd-mm-YYYY")
        .isLength({ max: 11 }).withMessage("fecha no puede tener una longitud mayor a 11"),
    check("telefono")
        .notEmpty().withMessage("telefono debe tener una longitud mayor a 0")
        .matches(/^\d{8,11}$/).withMessage("Debes ingresar un telefono valido")
        .isLength({ max: 11 }).withMessage("telefono no puede tener una longitud mayor a 11"),
    check("correo")
        .notEmpty().withMessage("correo debe tener una longitud mayor a 0")
        .isEmail().withMessage("Debes ingresar un correo valido")
        .isLength({ max: 100 }).withMessage("nombre no puede tener una longitud mayor a 100"),
    check("estado")
        .isInt().withMessage("Ingresa un estado valido"),
    validacionErrores,
];

// creando el enrutador
let router = Router();

// ruta solicitada, primero realiza las validaciones antes de llegar al controlador
router.post("/guardar_usuario", validaciones, guardarUsuario);
router.get("/estadosUsuario", getEstados)

export default router;