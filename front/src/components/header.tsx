export default function Header() {
  return (
    <header className="h-[80px] w-full flex flex-wrap items-center justify-around">
        <ul className="h-full gap-8 flex flex-wrap items-center justify-around">
            <li><a href="/" className="link_header text-xl text-[#dfe5f6]">Home</a></li>
            <li><a href="/formulario" className="link_header text-xl text-[#dfe5f6]">Formulario</a></li>
            <li><a href="/reportes" className="link_header text-xl text-[#dfe5f6]">Reportes</a></li>
        </ul>
    </header>
  )
}