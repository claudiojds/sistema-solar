import { pool } from "@/services/pool";

export interface Planet {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface CreatePlanetsParams {
    name: string;
    description: string;
    imageUrl: string
}



export async function getPlanets() {
  // await wait(3000)
  const results = await pool.query('SELECT id, name, description, image_url AS "imageUrl" FROM planets;');
  const planets: Planet[] = results.rows;

  return planets
}

export async function createPlanets(params: CreatePlanetsParams) {
    await pool.query(
        'INSERT INTO planets (name, description, image_url) VALUES ($1, $2, $3)',
        [params.name, params.description, params.imageUrl]
    )
}

export async function deletePlanet(id: number) {
    await pool.query('DELETE FROM planets WHERE id = $1', [id]);          
}