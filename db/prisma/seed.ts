import { PrismaClient } from '@prisma/client';
import { ConfigService } from './../src/services/Config.service';
import { HEARTRATE_TO_ADD } from './DemoData';

type File =
  | 'calories'
  | 'disance'
  | 'steps'
  | 'heart_rate'
  | 'very_active_minutes';

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
// const prisma = new PrismaClient();

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
  for (let i = 0; i < NUM_PERSON_TO_MIGRATE; i++) {
    const FILE_STEPS = seeding.createFilePath(i, 'steps');
    const FILE_DISTANCE = seeding.createFilePath(i, 'disance');
    const FILE_CALORIES = seeding.createFilePath(i, 'calories');
    const FILE_HEARTRATE = seeding.createFilePath(i, 'heart_rate');
    const FILE_VERYACTIVEMINUTES = seeding.createFilePath(
      i,
      'very_active_minutes',
    );
    console.table({
      FILE_STEPS,
      FILE_CALORIES,
      FILE_DISTANCE,
      FILE_HEARTRATE,
      FILE_VERYACTIVEMINUTES,
    });
    // for (let k = 0; k < ROWS_PER_TABLE_PER_PERSON; k++) {}
  }
};

migrateSteps();
