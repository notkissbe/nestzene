import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateSongDto extends PartialType(CreateSongDto) {
    @IsNotEmpty()
    ar: number;
}
