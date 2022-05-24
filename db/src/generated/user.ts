import { Distance } from './distance';
import { Steps } from './steps';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: String })
  auth0Id?: string;

  @ApiProperty({ isArray: true, type: () => Distance })
  Distance: Distance[];

  @ApiProperty({ isArray: true, type: () => Steps })
  Steps: Steps[];
}
