import type { FastifyRequest } from "fastify"
import { knex } from "../../database/knex.ts"
import User from "../models/user.ts"

export async function createUser(request: FastifyRequest) {
  const { name } = request.body as User;
  if (!name) return { message: "Usuario deve ter um nome" }

  await knex("users").insert({ name })

  return { message: "Criado com sucesso!" }
}

export async function deleteUser(request:FastifyRequest) {

  const { id } = request.body as User;
  if (!id) return {message: "passe um id"}

  await knex("users").delete().where(id)

}

export async function getMetrics(request: FastifyRequest){

  const { user_id } = request.header 

  const selectedUser = await knex("meals").where(user_id)

  const totalMeals = selectedUser.length
  const totalDietMeals = selectedUser.filter(meal => meal.diet === 1).length
  const totalOutOfDietMeals = totalMeals - totalDietMeals

}
