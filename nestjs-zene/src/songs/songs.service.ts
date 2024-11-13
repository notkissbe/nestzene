import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaClient } from '@prisma/client';
import { query } from 'express';

const prisma = new PrismaClient();


@Injectable()
export class SongsService {
  async create(createSongDto: CreateSongDto) {
    await prisma.songs.create({
      data: {
        cim: createSongDto.cim,
        szerzo: createSongDto.szerzo,
        hossz: createSongDto.hossz,
        ar: createSongDto.ar,
        ertekeles: createSongDto.ertekeles,
      },
    });
  }

  async findAll() {
    return await prisma.songs.findMany();
  }

  async findOne(id: number) {
    return prisma.songs.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    try{
      return await prisma.songs.update({
          where: {
            id
          },
          data:updateSongDto

        }
      )
    }
    catch (NotFoundException){
      return undefined
    }
  }

  async remove(id: number) {
    try{
      await prisma.songs.delete({
        where:{
          id
        }
      });
      return true;
    }
    catch{
      return false;
    }
  }
  async findFree(){
    return prisma.songs.findMany({
      where:{
        ar:0
      }
    })
  }

  async findTop(){
    return prisma.songs.findMany({
      orderBy:{
        ertekeles:"desc"
      },
      take:10
    })
  }
}
