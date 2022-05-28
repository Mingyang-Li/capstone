import { PrismaClient } from '@prisma/client';
import { CreateStepsArgs } from 'src/dto/steps';
import { ConfigService } from './../src/services/Config.service';
import {
  CALORIES_TO_ADD,
  DISTANCE_TO_ADD,
  HEARTRATE_TO_ADD,
  VERY_ACTIVE_MINUTES_TO_ADD,
} from './DemoData';

type File = 'calories' | 'disance' | 'steps';

export class Seeding {
  constructor(private configService: ConfigService) {}

  openFileByUserId(userId: number, file: File) {
    const filePath = `${this.configService.PATH_LOCAL_DATASET}/p0${userId}/fitbit/${file}.json`;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const rawdata = require('fs').readFileSync(filePath, 'utf8');
    const json = JSON.parse(rawdata.toString());
    return json;
  }
}

const configService = new ConfigService();
const prisma = new PrismaClient();
// const stepsService = new StepsService(prismaService);

// const seeding = new Seeding(configService);
// const fileOpened = seeding.openFileByUserId(1, 'steps');
// console.log(`len: ${fileOpened.length}`);

// const TABLE_TO_MIGRATE: File = '';
// const userId = 1;
// for (let i = 0; i < 5; i++) {
//   const transformed: CreateStepsArgs = {
//     dateTime: fileOpened[i].dateTime,
//     value: fileOpened[i].value,
//     userId: i + 1,
//     date: fileOpened[i].dateTime.slice(0, 10),
//   };
//   const created = stepsService.createSteps(transformed);
//   console.log(`${i + 1} => ${JSON.stringify(created)}`);
// }

// Test seeded:
// 1. Steps
// 2. Distance
// 3. Calories
// 4. VeryActiveMinutes
// 5. HeartRate - TBD

const seedHeartRate = HEARTRATE_TO_ADD.map(
  async (e) => await prisma.heartRate.create({ data: e }),
);
const promisedHeartRate = Promise.all(seedHeartRate);
console.log(promisedHeartRate);
