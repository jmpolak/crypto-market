import { Injectable } from '@nestjs/common';
import { CreateCryptocurrencyDto } from './dto/create-cryptocurrency.dto';
import { UpdateCryptocurrencyDto } from './dto/update-cryptocurrency.dto';

// Into a Provider?
import { Request } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
@Injectable()
export class CryptocurrencyService {
  
  constructor(private httpService: HttpService) {}
  
  async findAll(start: string): Promise<JSON | String>  {
    console.log(process.env.API_KEY);
    
    const headersRequest = {
      
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    };
    console.log(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}`);
    
    try{
      const result = this.httpService.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}`,
        { headers: headersRequest }).pipe(
          map(response => response.data))
      

      const resultArray = []    
      await result.forEach(cryptocurrency =>{         
        resultArray.push(cryptocurrency)
      })    
       return resultArray[0]["data"]
    }
    catch(e){
      return e
    }
  }

}
