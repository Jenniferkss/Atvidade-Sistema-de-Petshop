import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Gerando 50 pets aleatórios...')

  await prisma.pet.deleteMany()

  const pets = Array.from({ length: 50 }, () => ({
    nome: faker.person.firstName(),
    especie: faker.helpers.arrayElement(['Cachorro', 'Gato', 'Pássaro', 'Coelho']),
    idade: faker.number.int({ min: 1, max: 15 }),
    dono: faker.person.fullName()
  }))

  await prisma.pet.createMany({ data: pets })

  console.log('✅ 50 pets criados com sucesso!')
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
