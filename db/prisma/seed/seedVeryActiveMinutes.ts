import { PrismaClient } from '@prisma/client';
import { VERY_ACTIVE_MINUTES_TO_ADD } from '../DemoData';

const prisma = new PrismaClient();
const seedVeryActiveMinutes = VERY_ACTIVE_MINUTES_TO_ADD.map(
  async (e) => await prisma.veryActiveMinutes.create({ data: e }),
);
const promisedSeedVeryActiveMinutes = Promise.all(seedVeryActiveMinutes);
console.log(promisedSeedVeryActiveMinutes);
