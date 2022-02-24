

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptocurrencyModule } from './cryptocurrency/cryptocurrency.module';
import { ValidationPipe } from './validation.pipe';

@Module({
  imports: [CryptocurrencyModule],
  controllers: [AppController],
  providers: [AppService, ValidationPipe],
})
export class AppModule {}
