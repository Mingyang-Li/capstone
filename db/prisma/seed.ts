import { ConfigService } from './../src/services/Config.service';
import { PrismaService } from './../src/services/Prisma.service';
import { Inject } from '@nestjs/common';
import { CaloriesService } from 'src/services/Calories.service';
import { DistanceService } from 'src/services/Distance.service';
import { StepsService } from 'src/services/Step.service';
import fs from 'fs';

type File = 'calories' | 'disance' | 'steps';

export class Seed {
  constructor(
    @Inject() private stepsService: StepsService,
    @Inject() private distanceService: DistanceService,
    @Inject() private caloriesService: CaloriesService,
    @Inject() private configService: ConfigService,
  ) {}

  openDatasetFolder() {
    try {
      if (!fs.existsSync(this.configService.PATH_LOCAL_DATASET)) {
        fs.mkdirSync(this.configService.PATH_LOCAL_DATASET);
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  openFileByUserId(userId: number, file: File) {
    const filePath = `${this.configService.PATH_LOCAL_DATASET}/p0${userId}/fitbit/${file}.json`;
    try {
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
        return true;
      }
    } catch (err) {
      return false;
    }
  }
}

const prismaService = new PrismaService();
const stepsService = new StepsService(prismaService);
const distanceService = new DistanceService(prismaService);
const caloriesService = new CaloriesService(prismaService);
const configService = new ConfigService();

const seed = new Seed(
  stepsService,
  distanceService,
  caloriesService,
  configService,
);
const fileOpened = seed.openFileByUserId(1, 'calories');
console.log(`fileOpened: ${fileOpened}`);
