"use server";

import { createPlanets, deletePlanet } from "@/models/Planet";
import { revalidatePath } from "next/cache";

export async function createPlanetActions(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const imageUrl = formData.get("imageUrl");

  if (typeof name !== 'string' || typeof description !== 'string' || typeof imageUrl !== 'string') {
    return;
  }

  await createPlanets({name, description, imageUrl})

  // revalida os dados que vinheram do lado do servidor para um camiho especifico
  revalidatePath("/");
}

export async function deletePlanetsActions(id: number) {
  await deletePlanet(id)

  revalidatePath("/");
}
