import { PrismaService } from './Prisma.service';
import { Inject } from '@nestjs/common';

export class DistanceService {
  constructor(@Inject() private prismaService: PrismaService) {}
}
