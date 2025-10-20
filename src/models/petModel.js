//Importar o prisma Client 

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Crio variavel findAll e ja exporto 
export const findAll = async () => {
    // SELECT * FROM pets = findMany
   return await prisma.pet.findMany({
        orderBy: {nome: 'asc'}
    }) 
}

// Crio a variavel findById e ja exporto 
export const findById = async (id) => {
    // SELECT * FROM pets WHERE id = 1;
    return await prisma.pet.findUnique({
        where: {id: Number(id) }
    })
};