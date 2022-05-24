import { Inject } from '@nestjs/common';
import { CaloriesService } from 'src/services/Calories.service';
import { DistanceService } from 'src/services/Distance.service';
import { StepsService } from 'src/services/Step.service';
import { ConfigService } from 'src/services/Config.service';
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
    try {
      if (
        !fs.existsSync(
          `${this.configService.PATH_LOCAL_DATASET}/p0${userId}/fitbit/${file}`,
        )
      ) {
        fs.mkdirSync(
          `${this.configService.PATH_LOCAL_DATASET}/p0${userId}/fitbit/${file}`,
        );
        return true;
      }
    } catch (err) {
      return false;
    }
  }
}
