import { PlanetForm } from "@/components/PlanetForm";
import { PlanetItem } from "@/components/PlanetItem";
import styles from "@/app/styles/page.module.css"
import { getPlanets } from "@/models/Planet";

export default async function pagePlanets() {
  const planets = await getPlanets()

  
  console.log(planets)

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Planetas</h1>
      <div className={styles.container}>
        <PlanetForm />

        <section className={styles.planets}>
          {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </section>
      </div>
    </div>
  );
}