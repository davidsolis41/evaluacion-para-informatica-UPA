export default function Home() {
  return (
    <main className="h-[70vh] w-full flex flex-wrap items-center justify-around">
      <section className="w-[1200px] flex flex-col justify-center items-center">

        <h2 className="w-full text-center text-[50px] font-bold text-white">Bienvenido a mi prueba técnica para Cooperativa UPA</h2>
        <h2 className="w-full text-center text-[50px] font-bold text-white">Soy David Solis, Desarrollador Full-Stack</h2>
        <p className="mt-5 w-[95%] text-center text-3xl text-[#cbd4e4] mb-5">
          En esta prueba técnica podras encontrar todos los puntos requeridos. A continuación encontraras los enlaces para las pagínas
        </p>
        <div className="w-full flex justify-center gap-5 mt-5">
        <a href="/formulario" className="bg-[#0061ee] inline-flex items-center justify-center rounded-full border bg-transparent text-center text-base text-page leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 text-white border-slate-500 hover:bg-slate-800 hover:border-slate-800 cursor-pointer font-semibold bg-primary hover:text-white">
          Formulario
        </a>
        <a href="/reportes" className="inline-flex items-center justify-center rounded-full border bg-transparent text-center text-base text-page leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 text-slate-300 border-slate-500 hover:bg-slate-800 hover:border-slate-800 cursor-pointer font-semibold bg-primary hover:text-white">
          Reportes
        </a>
        <a href="/punteo" className="inline-flex items-center justify-center rounded-full border bg-transparent text-center text-base text-page leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 text-slate-300 border-slate-500 hover:bg-slate-800 hover:border-slate-800 cursor-pointer font-semibold bg-primary hover:text-white">
          Punteo
        </a>
        </div>
      </section>
    </main>
  );
}
