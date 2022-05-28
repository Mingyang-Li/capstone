import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateHeartRateArgs {
  @ApiPropertyOptional({ type: Number })
  id?: number;

  @ApiPropertyOptional({ type: Date })
  dateTime?: Date;

  @ApiPropertyOptional({ type: Date })
  date?: Date;

  @ApiPropertyOptional({ type: Number })
  bpm?: number;

  @ApiPropertyOptional({ type: Number })
  confidence?: number;

  @ApiPropertyOptional({ type: Number })
  userId?: number;
}
