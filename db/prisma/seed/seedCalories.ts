import { PrismaClient } from '@prisma/client';
import { CALORIES_TO_ADD } from '../DemoData';

const prisma = new PrismaClient();
const seedCalories = CALORIES_TO_ADD.map(
  async (e) => await prisma.calories.create({ data: e }),
);
const promisedSeedCalories = Promise.all(seedCalories);
console.log(promisedSeedCalories);
