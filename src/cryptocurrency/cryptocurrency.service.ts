import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
@Injectable()
export class CryptocurrencyService {
  
  constructor(private httpService: HttpService) {}
  
  async findAll(start: number):Promise<Object> {
   
    const headersRequest = {  
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    };
    
    try{
      const result = this.httpService.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start.toString()}`,
        { headers: headersRequest }).pipe(
          map(response => response.data))
      

      const resultArray = []    
      await result.forEach(cryptocurrency =>{         
        resultArray.push(cryptocurrency)
      })    
      // console.log(Object.keys(resultArray[0]["data"]).length);
      // if(Object.keys(resultArray[0]["data"]).length === 0){
      //     return {crypto:"no data"}
      // }
      return resultArray[0]["data"]
    }
    catch(e){
      throw new ServiceUnavailableException()
    }
  }

}
