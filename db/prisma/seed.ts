import { Inject } from '@nestjs/common';
import { CaloriesService } from 'src/services/Calories.service';
import { DistanceService } from 'src/services/Distance.service';
import { StepsService } from 'src/services/Step.service';

export class Seed {
  constructor(
    @Inject() private stepsService: StepsService,
    @Inject() private distanceService: DistanceService,
    @Inject() private caloriesService: CaloriesService,
  ) {}
}
