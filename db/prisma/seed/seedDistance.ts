import { PrismaClient } from '@prisma/client';
import { DISTANCE_TO_ADD } from '../DemoData';

const prisma = new PrismaClient();
const seedDistance = DISTANCE_TO_ADD.map(
  async (e) => await prisma.distance.create({ data: e }),
);
const promisedSeedDistance = Promise.all(seedDistance);
console.log(promisedSeedDistance);
