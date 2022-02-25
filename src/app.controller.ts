import { Controller, Get, ParseIntPipe, Query, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CryptocurrencyService } from './cryptocurrency/cryptocurrency.service';
import { ValidationPipe } from './validation.pipe';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cryptocurrencyService: CryptocurrencyService
    ) {}
  

  @Render("index")
  @Get()
  async getPage(@Query("page", ValidationPipe) page:number, @Res() res): Promise<Object>{ 
    const start: number = page * 100 - 99
    return {crypto:await this.cryptocurrencyService.findAll(start), pagePrevious: page - 1, pageNext : page + 1  }
  }     
}

