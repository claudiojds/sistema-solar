import Image from "next/image";

export default function Index () {
    return(
        <section className="flex flex-col gap-3 items-center p-5">
            <Image
                src="/sistema-solar.webp"
                alt="sistema-solar"
                width={600}
                height={600}
            />
            <p className="p-3">
                Os <strong>planetas do Sistema Solar</strong> formam um agrupamento de oito corpos celestes que orbitam o Sol: Mercúrio, Vênus Terra, Marte, Júpiter, Saturno, Urano e Netuno. São classificados em planetas rochosos (formados predominantemente por rochas e minerais) e em planetas gasosos (constituídos por gases diversos). Até tempos atrás, mais precisamente 2006, o Sistema Solar era composto por nove planetas, porém Plutão foi reclassificado como planeta-anão no referido ano.
            </p>
        </section>
    );
};