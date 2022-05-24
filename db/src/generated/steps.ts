import { User } from './user';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Steps {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: Date })
  dateTime?: Date;

  @ApiPropertyOptional({ type: Date })
  date?: Date;

  @ApiPropertyOptional({ type: Number })
  value?: number;

  @ApiPropertyOptional({ type: Number })
  userId?: number;

  @ApiPropertyOptional({ type: () => User })
  User?: User;
}
