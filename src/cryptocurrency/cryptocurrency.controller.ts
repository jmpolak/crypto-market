import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CryptocurrencyService } from './cryptocurrency.service';
import { CreateCryptocurrencyDto } from './dto/create-cryptocurrency.dto';
import { UpdateCryptocurrencyDto } from './dto/update-cryptocurrency.dto';

@Controller('cryptocurrency')
export class CryptocurrencyController {
  constructor(private readonly cryptocurrencyService: CryptocurrencyService) {}

  @Get()
  findAll() {
    return "this.cryptocurrencyService.findAll()";
  }
}
