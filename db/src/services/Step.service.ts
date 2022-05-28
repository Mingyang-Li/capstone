import { PrismaClient } from '@prisma/client';
import { CreateStepsArgs } from './../dto/steps';

export class StepsService {
  constructor(private primma: PrismaClient) {}

  async createSteps(param: CreateStepsArgs): Promise<any> {
    return this.primma.steps.create({
      data: {
        dateTime: param.dateTime,
        value: param.value,
        date: param.date,
        userId: param.userId,
      },
    });
  }
}
