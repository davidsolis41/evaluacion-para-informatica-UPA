"use client";
import React from "react";
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { reporte: string } }) {
  const router = useRouter();
  const { reporte } = params;
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if(reporte != "todos" && reporte != "hoy" && reporte != "ayer"){
        router.push("/reportes");
        return;
    }

    (async () => {
      const response = await fetch(
        "http://localhost:3000/ejecutar_reporte?reporte="+reporte
      );
      if (response.status != 200) return alert();
      const result = await response.json();
      setData(result);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="h-[50dvh] w-full flex flex-col items-center justify-center">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Reporte de Usuarios
        </h1>
        {loading ? (
          <div className="text-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            <p className="mt-2">Cargando datos...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-slate-400 text-left text-black">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Nombre</th>
                  <th className="border border-gray-300 px-4 py-2">Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {data.map((usuario: any) => (
                  <tr key={usuario.id} className="hover:bg-slate-400">
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.nombre}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.telefono}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
