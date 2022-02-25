import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata):number {
    try{
      const newValue: number = parseInt(value)  
      if(isNaN(newValue) || newValue < 1){
        return 1
      }
      return newValue
    }
    catch(e){
      throw new BadRequestException()
    }
  }
}
