import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVeryActiveMinutesArgs {
  @ApiPropertyOptional({ type: Number })
  id?: number;

  @ApiPropertyOptional({ type: Date })
  dateTime?: Date;

  @ApiPropertyOptional({ type: Date })
  date?: Date;

  @ApiPropertyOptional({ type: Number })
  value?: number;

  @ApiPropertyOptional({ type: Number })
  userId?: number;
}
