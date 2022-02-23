

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptocurrencyModule } from './cryptocurrency/cryptocurrency.module';

@Module({
  imports: [CryptocurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
