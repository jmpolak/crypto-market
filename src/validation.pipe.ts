import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata):number {
    try{
      return parseInt(value);
    }
    catch(e){
      throw new BadRequestException()
    }
  }
}
