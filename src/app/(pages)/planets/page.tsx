import { PlanetForm } from "@/components/PlanetForm";
import { PlanetItem } from "@/components/PlanetItem";
import styles from "@/app/styles/page.module.css";
import { getPlanets } from "@/models/Planet";
import { Suspense } from "react";

export default async function pagePlanets() {
  const planets = await getPlanets();

  console.log(planets);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-3 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={styles.container}>
        <Suspense fallback={<h2>Carregando Planetas...</h2>}>
          <PlanetForm />
        </Suspense>

        <section className={styles.planets}>
          {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </section>
      </div>
    </div>
  );
}
