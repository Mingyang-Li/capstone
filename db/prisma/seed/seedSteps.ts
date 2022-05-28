import { PrismaClient } from '@prisma/client';
import { STEPS_TO_ADD } from '../DemoData';

const prisma = new PrismaClient();
const seedSteps = STEPS_TO_ADD.map(
  async (e) => await prisma.steps.create({ data: e }),
);
const promisedSeedSteps = Promise.all(seedSteps);
console.log(promisedSeedSteps);
