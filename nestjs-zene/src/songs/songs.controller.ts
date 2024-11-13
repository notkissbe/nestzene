import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}


  @Get("free")
  async findFree(){
    return await this.songsService.findFree();
  }

  @Get("top")
  findTop(){
    return this.songsService.findTop();
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const song = this.songsService.findOne(+id);
    if (!song) throw new NotFoundException("Song not found -> " + id)
    return song;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return await this.songsService.update(+id, updateSongDto);

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const success = await this.songsService.remove(+id);
    if(!success) throw new NotFoundException("Nem talalhato a konyv");
  }

  
  }

