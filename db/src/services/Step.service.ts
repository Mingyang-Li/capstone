import { PrismaService } from './Prisma.service';
import { Inject } from '@nestjs/common';

export class StepsService {
  constructor(@Inject() private prismaService: PrismaService) {}
}
