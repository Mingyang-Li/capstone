import { PrismaClient } from '@prisma/client';
import { HEARTRATE_TO_ADD } from '../DemoData';

const prisma = new PrismaClient();
const seedHeartRate = HEARTRATE_TO_ADD.map(
  async (e) => await prisma.heartRate.create({ data: e }),
);
const promisedHeartRate = Promise.all(seedHeartRate);
console.log(promisedHeartRate);
