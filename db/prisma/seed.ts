import { ConfigService } from './../src/services/Config.service';
const fs = require('fs');

type File = 'calories' | 'disance' | 'steps';

export class Seeding {
  constructor(
    private configService: ConfigService,
  ) {}

  openFileByUserId(userId: number, file: File) {
    const filePath = `${this.configService.PATH_LOCAL_DATASET}/p0${userId}/fitbit/${file}.json`;
    // return filePath;
    const rawdata = fs.readFileSync(filePath);
    const json = JSON.parse(rawdata.toString());
    return json;
    // try {
    //   if (!fs.existsSync(filePath)) {
    //     const rawdata = fs.readFileSync(filePath);
    //     const json = JSON.parse(rawdata);
    //     return json;
    //   }
    // } catch (err) {
    //   return false;
    // }
  }
}

const configService = new ConfigService();

const seed = new Seeding(configService);
const fileOpened = seed.openFileByUserId(1, 'steps');
console.log(`fileOpened: ${fileOpened}`);

const TABLE_TO_MIGRATE: File = '';
const userId = 1;
for (let i = 0, i < 16, i ++) {
  s
}
