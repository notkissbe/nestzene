import { IsNotEmpty, isNotEmpty, IsString, Min, Max } from "class-validator";

export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    cim: string;
    @IsNotEmpty()
    @IsString()
    szerzo: string;
    @IsNotEmpty()
    hossz: number;
    @IsNotEmpty()
    ar: number;
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    ertekeles: number;
}
