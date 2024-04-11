import Image from "next/image";

function page() {
  return (
    <main className="inset-0 flex flex-col w-[90%] text-pretty tracking-widest md:w-1/2 my-10 md:my-24 mx-auto gap-10 leading-8">
      <Image
        className="w-1/2 md:w-1/3 mx-auto "
        src="/main.jpg"
        width={9999}
        height={9999}
        alt=""
      />

      <p className="text-gray-600 text-xl font-semibold">Jun 5, 2024</p>

      <h1 className="text-4xl md:text-5xl font-semibold">SEVIES</h1>

      <p>
        AL AMPARO DE LA CONSTITUCION POLITICA DEL ESTADO PERUANO, EL CODIGO
        CIVIL VIGENTE Y DEMAS NORMAS PERTINENTES, SE CONSTITUYE LA ASOCIACIÓN
        DENOMINADA: “ASOCIACIÓN DE SEMBRADORES DE VIDA Y ESPERANZA SIGLA
        “SEVIES”
      </p>

      <p>
        TENDRA COMO DOMICILIO EL DISTRITO DE PACHÍA. PROVINCIA Y DEPARTAMENTO DE
        TACNA, Y SUS SEDES SE ESTABLECERAN EN CUALQUIER LUGAR DEL MUNDO.
      </p>

      <p>
        CONFORMA UNA PERSONA JURIDICA DE DERECHO PRIVADO, SIN FINES DE LUCRO,
        RELIGIOSA, SOLIDARIA, DEMOCRATICA, AUTONOMA Y DONDE PREVALECE LA
        LIBERTAD, SE RIGE POR EL PRESENTE ESTATUTO Y DEMAS NORMAS INTERNAS
        DEBIDAMENTE APROBADAS POR SUS ASOCIADOS, DE ACUERDO AL CODIGO CIVIL
        PERUANO.
      </p>
    </main>
  );
}

export default page;
