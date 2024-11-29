"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldError } from "react-hook-form";

const schema = z.object({
  nombre: z
    .string()
    .min(1, "nombre debe tener una longitud mayor a 0")
    .regex(/^[A-Za-z]+$/, "nombre debe contener solo letras")
    .max(100, "nombre no puede tener una longitud mayor a 100"),
  fecha: z
    .string()
    .min(1, "fecha debe tener una longitud mayor a 0")
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
      "Debes ingresar una fecha válida en el formato dd-mm-YYYY"
    )
    .max(11, "fecha no puede tener una longitud mayor a 11"),
  telefono: z
    .string()
    .min(1, "telefono debe tener una longitud mayor a 0")
    .regex(/^\d{8,11}$/, "Debes ingresar un telefono válido")
    .max(11, "telefono no puede tener una longitud mayor a 11"),
  correo: z
    .string()
    .min(1, "correo debe tener una longitud mayor a 0")
    .email("Debes ingresar un correo válido")
    .max(100, "correo no puede tener una longitud mayor a 100"),
  estado: z
    .string()
    .nonempty("Ingresa un estado válido")
    .refine((value) => !isNaN(parseInt(value)), "Ingresa un estado válido"),
});

type FormData = z.infer<typeof schema>;

function Formulario() {
  const [estados, setEstados] = React.useState<
    { id: number; titulo: string }[]
  >([]);

  const [edad, setEdad] = React.useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    data.estado = Number(data.estado) as any;
    const response = await fetch("http://localhost:3000/guardar_usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) alert("Error al enviar el formulario"); // TODO:

    alert("Formulario enviado con éxito"); // TODO:
  }

  React.useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/estadosUsuario");
      if (!response.ok) {
        return alert("Error al cargar los estados"); // TODO:
      }
      const data = await response.json();
      setEstados(data);
    })();
  }, []);

  const fecha = watch("fecha");
  React.useEffect(() => {
    if (
      fecha &&
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(fecha)
    ) {
      const [day, month, year] = fecha.split("-").map(Number);
      const birthDate = new Date(year, month - 1, day);
      const hoy = new Date();

      let calculatedAge = hoy.getFullYear() - birthDate.getFullYear();

      const birthdayThisYear = new Date(hoy.getFullYear(), month - 1, day);
      if (hoy < birthdayThisYear) {
        calculatedAge--;
      }

      setEdad(calculatedAge >= 0 ? calculatedAge : 0);
    } else {
      setEdad(0);
    }
  }, [fecha]);

  React.useEffect(() => {
    const firstError = Object.keys(errors)[0] as keyof FormData;
    if (firstError) setFocus(firstError);
  }, [errors, setFocus]);

  return (
    <section className="h-[80dvh] w-full flex flex-col items-center justify-center">
      <h2 className="w-full text-center font-bold text-[40px] mb-[15px]">
        Formulario de Usuarios
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center border border-slate-300 rounded-lg w-[450px] py-3 shadow-md shadow-slate-800"
      >
        <div className="w-[90%] flex flex-col mt-4 mb-2">
          <label htmlFor="nombre" className="text-[1.1rem] mb-1">
            Nombre:
          </label>
          <input
            id="nombre"
            {...register("nombre")}
            className="h-[35px] rounded-md bg-slate-200 text-black"
          />
          {errors.nombre && (
            <p className="text-red-500">{errors.nombre.message}</p>
          )}
        </div>

        <div className="w-[90%] flex flex-col mt-4 mb-2">
          <label htmlFor="fecha" className="text-[1.1rem] mb-1">
            Fecha (dd-mm-YYYY):
          </label>
          <input
            id="fecha"
            {...register("fecha")}
            className="h-[35px] rounded-md bg-slate-200 text-black"
          />
          {errors.fecha && (
            <p className="text-red-500">{errors.fecha.message}</p>
          )}
        </div>

        <div className="w-[90%] flex flex-col mt-4 mb-2">
          <p>Edad: {edad} Años</p>
        </div>

        <div className="w-[90%] flex flex-col mt-4 mb-2">
          <label htmlFor="telefono" className="text-[1.1rem] mb-1">
            Teléfono:
          </label>
          <input
            id="telefono"
            {...register("telefono")}
            className="h-[35px] rounded-md bg-slate-200 text-black"
          />
          {errors.telefono && (
            <p className="text-red-500">{errors.telefono.message}</p>
          )}
        </div>

        <div className="w-[90%] flex flex-col mt-4 mb-2">
          <label htmlFor="correo" className="text-[1.1rem] mb-1">
            Correo:
          </label>
          <input
            id="correo"
            {...register("correo")}
            className="h-[35px] rounded-md bg-slate-200 text-black"
          />
          {errors.correo && (
            <p className="text-red-500">{errors.correo.message}</p>
          )}
        </div>

        <div className="w-[90%] flex flex-col mt-4 mb-2">
          <label htmlFor="estado" className="text-[1.1rem] mb-1">
            Estado:
          </label>
          <select
            id="estado"
            {...register("estado")}
            className="h-[35px] rounded-md bg-slate-200 text-black"
          >
            <option value="">Seleccione un estado</option>
            {estados.map((estado) => (
              <option key={estado.id} value={estado.id}>
                {estado.titulo}
              </option>
            ))}
          </select>
          {errors.estado && (
            <p className="text-red-500">{errors.estado.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-5 mb-2 bg-[#0061ee] inline-flex items-center justify-center rounded-full border bg-transparent text-center text-base text-page leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 text-white border-slate-500 hover:bg-slate-800 hover:border-slate-800 cursor-pointer font-semibold bg-primary hover:text-white"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Formulario;
