/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '@prisma/client';
import { CreateStepsArgs } from 'src/dto/steps';
import { ConfigService } from './../src/services/Config.service';

type File =
  | 'calories'
  | 'distance'
  | 'steps'
  | 'heart_rate'
  | 'very_active_minutes';

export interface HeartRateValue {
  bpm?: number;
  confidence?: number;
}

interface RawData {
  dateTime: string;
  value?: number;
}

interface FileByUserId {
  userId: number;
  filePath: string;
  data?: Array<RawData>;
}

export class Seeding {
  constructor(private configService: ConfigService) {}

  createFilePath(userId: number, file: File): string {
    return `${this.configService.PATH_LOCAL_DATASET}/p0${userId}/fitbit/${file}.json`;
  }

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

const seeding = new Seeding(configService);
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

const MAX_DB_ROWS = 10000000;
const NUM_PERSON_TO_MIGRATE = 5;
const MAX_ROWS_PER_PERSON = 2000000;
const MAX_ROWS_PER_TABLE_PER_PERSON = 400000;
const ROWS_PER_TABLE_PER_PERSON = 350000;

export const migrateSteps = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'steps');
    files.push({ userId: i, filePath: filename });
  }
  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });

  files.forEach((e) => {
    const promises = [];
    e.data.forEach((item) => {
      const data: CreateStepsArgs = {
        dateTime: new Date(item.dateTime),
        date: new Date(item.dateTime),
        value: item.value,
        userId: e.userId,
      };
      // promises.push(async () => await prisma.steps.create(data));
    });
    // const resolvedPromises = Promise.all(promises);
  });
  let totalRows = 0;
  files.forEach((e) => (totalRows += e.data.length));
  return totalRows;
};

export const migrateCalories = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'calories');
    files.push({ userId: i, filePath: filename });
    // for (let k = 0; k < ROWS_PER_TABLE_PER_PERSON; k++) {}
  }
  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  let totalRows = 0;
  files.forEach((e) => (totalRows += e.data.length));
  return totalRows;
};

export const migrateDistance = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'distance');
    files.push({ userId: i, filePath: filename });
    // for (let k = 0; k < ROWS_PER_TABLE_PER_PERSON; k++) {}
  }
  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  let totalRows = 0;
  files.forEach((e) => (totalRows += e.data.length));
  return totalRows;
};

export const migrateVeryActiveMinutes = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'very_active_minutes');
    files.push({ userId: i, filePath: filename });
    // for (let k = 0; k < ROWS_PER_TABLE_PER_PERSON; k++) {}
  }
  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  let totalRows = 0;
  files.forEach((e) => (totalRows += e.data.length));
  return totalRows;
};

export const migrateHeartRate = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'heart_rate');
    files.push({ userId: i, filePath: filename });
    // for (let k = 0; k < ROWS_PER_TABLE_PER_PERSON; k++) {}
  }
  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  let totalRows = 0;
  files.forEach((e) => (totalRows += e.data.length));
  return totalRows;
};

// console.log(
//   `ALL_ROWS => ${
//     migrateCalories() +
//     migrateDistance() +
//     migrateSteps() +
//     migrateHeartRate() +
//     migrateVeryActiveMinutes()
//   }`,
// );

type Table =
  | 'Steps'
  | 'Distance'
  | 'Calories'
  | 'HeartRate'
  | 'VeryActiveMinutes';

async function clearTable(table?: Table) {
  switch (table) {
    case 'Calories':
      await prisma.calories.deleteMany({});
    case 'Distance':
      await prisma.distance.deleteMany({});
    case 'Steps':
      await prisma.steps.deleteMany({});
    case 'HeartRate':
      await prisma.heartRate.deleteMany({});
    case 'VeryActiveMinutes':
      await prisma.veryActiveMinutes.deleteMany({});
    default:
      await prisma.calories.deleteMany({});
      await prisma.distance.deleteMany({});
      await prisma.steps.deleteMany({});
      await prisma.heartRate.deleteMany({});
      await prisma.veryActiveMinutes.deleteMany({});
  }
}

clearTable();
