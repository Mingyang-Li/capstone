import { Inject } from '@nestjs/common';
import { PrismaService } from './Prisma.service';

export class CaloriesService {
  constructor(@Inject() private prismaService: PrismaService) {}
}
