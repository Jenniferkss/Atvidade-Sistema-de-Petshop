//Importar o prisma Client

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Crio variavel findAll e ja exporto
export const findAll = async () => {
  // SELECT * FROM pets = findMany
  return await prisma.pet.findMany({
    orderBy: { nome: "asc" },
  });
};

// Crio a variavel findById e ja exporto
export const findById = async (id) => {
  // SELECT * FROM pets WHERE id = 1;
  return await prisma.pet.findUnique({
    where: { id: Number(id) },
  });
};

export const create = async (data) => {
  return await prisma.pet.create({
    data: {
      nome: data.nome,
      especie: data.especie,
      idade: data.idade,
      dono: data.dono,
    },
  });
};

export const deletePet = async (id) => {
    return await prisma.pet.delete({
        where: {id: Number(id)}
    })
};

export const update = async (id, data) => {
    return await prisma.pet.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.especie && { especie: data.especie }),
            ...(data.idade && { idade: Number(data.idade)}),
            ...(data.dono && { dono: data.dono }),
        }
    })
};