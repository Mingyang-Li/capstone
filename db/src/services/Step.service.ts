import { CreateStepsArgs } from './../dto/steps';
import { PrismaService } from './Prisma.service';

export class StepsService {
  constructor(private prismaService: PrismaService) {}

  async createSteps(param: CreateStepsArgs): Promise<any> {
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
