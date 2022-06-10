/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '@prisma/client';
import { CreateHeartRateArgs } from 'src/dto/heartRate';
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

interface HeartRate {
  dateTime: string;
  value: HeartRateValue;
}

interface FileByUserId_HeartRate {
  userId: number;
  filePath: string;
  data?: Array<HeartRate>;
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
    const rawdata = require('fs').readFileSync(filePath, 'utf8');
    const json = JSON.parse(rawdata.toString());
    return json;
  }
}

const configService = new ConfigService();
const prisma = new PrismaClient();
const seeding = new Seeding(configService);

const MAX_DB_ROWS = 10000000;
const NUM_PERSON_TO_MIGRATE = 5;
const MAX_ROWS_PER_PERSON = 2000000;
const MAX_ROWS_PER_TABLE_PER_PERSON = 400000;
const ROWS_PER_TABLE_PER_PERSON = 350000;

export async function migrateSteps() {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'steps');
    files.push({ userId: i, filePath: filename });
  }
  console.log('✔️ Got all steps file paths');

  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  console.log('✔️ Got all file data');

  files.forEach(async (e) => {
    console.log(`⌛ => Migrating steps file for person ${e.userId}`);

    const originalData = e.data.map((item) => {
      const data = {
        dateTime: new Date(item.dateTime),
        date: new Date(item.dateTime),
        value: item.value,
        userId: e.userId,
      };
      return data;
    });

    await prisma.steps.createMany({ data: originalData });

    console.log(
      `✔️ => Completed migrating ${originalData.length} rows of Steps for person ${e.userId}\n`,
    );
  });
}

export const migrateCalories = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'calories');
    files.push({ userId: i, filePath: filename });
  }
  console.log('✔️ Got all steps file paths');

  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  console.log('✔️ Got all file data');

  files.forEach(async (e) => {
    console.log(`⌛ => Migrating calories file for person ${e.userId}`);

    const originalData = e.data.map((item) => {
      const data = {
        dateTime: new Date(item.dateTime),
        date: new Date(item.dateTime),
        value: item.value,
        userId: e.userId,
      };
      return data;
    });

    await prisma.calories.createMany({ data: originalData });

    console.log(
      `✔️ => Completed migrating ${originalData.length} rows of Calories for person ${e.userId}\n`,
    );
  });
};

export const migrateDistance = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'distance');
    files.push({ userId: i, filePath: filename });
  }
  console.log('✔️ Got all steps file paths');

  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  console.log('✔️ Got all file data');

  files.forEach(async (e) => {
    console.log(`⌛ => Migrating distance file for person ${e.userId}`);

    const originalData = e.data.map((item) => {
      const data = {
        dateTime: new Date(item.dateTime),
        date: new Date(item.dateTime),
        value: item.value,
        userId: e.userId,
      };
      return data;
    });

    await prisma.distance.createMany({ data: originalData });

    console.log(
      `✔️ => Completed migrating ${originalData.length} rows of Distance for person ${e.userId}\n`,
    );
  });
};

export const migrateVeryActiveMinutes = () => {
  const files: FileByUserId[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'very_active_minutes');
    files.push({ userId: i, filePath: filename });
  }
  console.log('✔️ Got all steps file paths');

  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  console.log('✔️ Got all file data');

  files.forEach(async (e) => {
    console.log(
      `⌛ => Migrating VeryActiveMinutes file for person ${e.userId}`,
    );

    const originalData = e.data.map((item) => {
      const data = {
        dateTime: new Date(item.dateTime),
        date: new Date(item.dateTime),
        value: item.value,
        userId: e.userId,
      };
      return data;
    });

    await prisma.veryActiveMinutes.createMany({ data: originalData });

    console.log(
      `✔️ => Completed migrating ${originalData.length} rows of VeryActiveMinutes for person ${e.userId}\n`,
    );
  });
};

export const migrateHeartRate = () => {
  const files: FileByUserId_HeartRate[] = [];
  for (let i = 1; i < NUM_PERSON_TO_MIGRATE + 1; i++) {
    const filename = seeding.createFilePath(i, 'heart_rate');
    files.push({ userId: i, filePath: filename });
  }
  console.log('✔️ Got all HeartRate file paths');

  files.forEach((e) => {
    const rawFile = require(e.filePath);
    e.data = rawFile;
  });
  console.log('✔️ Got all file data');

  files.forEach(async (e) => {
    console.log(`⌛ === Migrating HeartRate file for person ${e.userId}`);

    const originalData = e.data.map((item) => {
      const data: CreateHeartRateArgs = {
        dateTime: new Date(item.dateTime),
        date: new Date(item.dateTime),
        bpm: item.value.bpm,
        confidence: item.value.confidence,
        userId: e.userId,
      };
      return data;
    });

    console.log(
      `⌛ === Migrating ${originalData.length} rows of HeartRate for person ${e.userId}`,
    );

    await prisma.heartRate.createMany({ data: originalData }).then(() => {
      console.log(
        `✔️ === Completed migrating ${originalData.length} rows of HeartRate for person ${e.userId}`,
      );
    });
  });
};

type Table =
  | 'Steps'
  | 'Distance'
  | 'Calories'
  | 'HeartRate'
  | 'VeryActiveMinutes';

export const clearTable = async (table?: Table) => {
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
};

// const v8 = require('v8');
// console.table(v8.getHeapStatistics());
