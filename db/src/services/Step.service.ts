import { PrismaService } from './Prisma.service';
import { Inject } from '@nestjs/common';

export class StepService {
  constructor(@Inject() private prismaService: PrismaService) {}

  async createStep() {}
}
