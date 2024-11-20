import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'
import { min } from 'class-validator';
const prisma = new PrismaClient()

async function main() {
    for(let i=0; i<50; i++){
        const free=Math.random()<0.25;

        await prisma.songs.create({
        data:{
            cim: faker.hacker.phrase(),
            szerzo: faker.music.artist(),
            hossz: faker.number.int({min: 60, max:150}),
            ar: free? 0: faker.number.int({min: 99, max: 300}),
            ertekeles: Math.floor(Math.random()*5)+1
        }
      })
}
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })