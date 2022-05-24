import { CreateStepsArgs } from './../dto/steps';
import { PrismaService } from './Prisma.service';
import { Inject } from '@nestjs/common';
import { Prisma, Steps } from '@prisma/client';

export class StepsService {
  constructor(@Inject() private prismaService: PrismaService) {}

  async createSteps(
    param: CreateStepsArgs,
  ): Promise<Prisma.Prisma__StepsClient<Steps>> {
    return this.prismaService.steps.create({
      data: {
        dateTime: param.dateTime,
        value: param.value,
        date: param.date,
        userId: param.userId,
      },
    });
  }
}
