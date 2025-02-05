export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center order-1 md:order-2 text-white">
      <p className="text-1xl mb-2">
        © {currentYear} CujaeVa. Todos los derechos reservados.
      </p>
      <p className="text-1xl">
        Creado por{" "}
        <a
          // href="https://medialityc.com"
          className="font-semibold hover:underline text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cujae
        </a>
      </p>
    </div>
  );
}
