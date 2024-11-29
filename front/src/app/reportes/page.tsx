export default function Reportes() {
  return (
    <section className="h-[80dvh] w-full flex flex-col items-center justify-center">
      <h2 className="w-full text-center font-bold text-[40px] mb-[15px]">
        Haz click en el Reporte deseado
      </h2>
      <section className="flex flex-col items-center border border-slate-300 rounded-lg w-[450px] py-[50px] shadow-md shadow-slate-800">
        <a
          href="/reportes/todos"
          className="w-[50%] flex flex-col mt-4 mb-2 py-5 transition-all duration-200 hover:scale-125 hover:bg-slate-400 border-2 border-slate-800 rounded-lg"
        >
          <span className="w-full text-center text-xl">Todos</span>
        </a>
        <a
          href="/reportes/hoy"
          className="w-[50%] flex flex-col mt-4 mb-2 py-5 transition-all duration-200 hover:scale-125 hover:bg-slate-400 border-2 border-slate-800 rounded-lg"
        >
          <span className="w-full text-center text-xl">Hoy</span>
        </a>
        <a
          href="/reportes/ayer"
          className="w-[50%] flex flex-col mt-4 mb-2 py-5 transition-all duration-200 hover:scale-125 hover:bg-slate-400 border-2 border-slate-800 rounded-lg"
        >
          <span className="w-full text-center text-xl">Ayer</span>
        </a>
      </section>
    </section>
  );
}
