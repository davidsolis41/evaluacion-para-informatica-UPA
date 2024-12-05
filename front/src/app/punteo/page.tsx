"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldError } from "react-hook-form";

const schema = z.object({
  correo: z
    .string()
    .min(1, "correo debe tener una longitud mayor a 0")
    .email("Debes ingresar un correo válido")
    .max(100, "correo no puede tener una longitud mayor a 100"),
    punteo: z
    .preprocess((a) => parseInt(z.string().parse(a),10), z.number().min(1, "Ingresa un punteo válido de 1 a 100").max(100,"Ingresa un punteo válido de 1 a 100"))
});

type FormData = z.infer<typeof schema>;

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    const response = await fetch("http://localhost:3000/guardar_punteo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) alert("Error al enviar el formulario");

    reset();
    alert("Formulario enviado con éxito");
  }


  React.useEffect(() => {
    const firstError = Object.keys(errors)[0] as keyof FormData;
    if (firstError) setFocus(firstError);
  }, [errors, setFocus]);

  return (
    <section className="h-[80dvh] w-full flex flex-col items-center justify-center">
      <h2 className="w-full text-center font-bold text-[40px] mb-[15px]">
        Formulario de Punteo
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center border border-slate-300 rounded-lg w-[450px] py-3 shadow-md shadow-slate-800"
      >
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
          <label htmlFor="punteo" className="text-[1.1rem] mb-1">
            Punteo:
          </label>
          <input
            id="punteo"
            {...register("punteo")}
            className="h-[35px] rounded-md bg-slate-200 text-black"
          />
          {errors.punteo && (
            <p className="text-red-500">{errors.punteo.message}</p>
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
