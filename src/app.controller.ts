import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CryptocurrencyService } from './cryptocurrency/cryptocurrency.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cryptocurrencyService: CryptocurrencyService
    ) {}
  
 
  @Render("index")
  @Get()
  async getPage(@Query("page") page:string){
    // Protect -> and number validation
    
    if(page){
      const start = parseInt(page) * 100 - 99
      return {crypto:await this.cryptocurrencyService.findAll(start.toString()), pagePrevious: parseInt(page) - 1, pageNext : parseInt(page) + 1  }
    }
    return {crypto:await this.cryptocurrencyService.findAll("1"), pagePrevious: false, pageNext : 2 }
  }
}
