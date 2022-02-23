import { Module } from '@nestjs/common';
import { CryptocurrencyService } from './cryptocurrency.service';
import { CryptocurrencyController } from './cryptocurrency.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports:[ HttpModule , ConfigModule.forRoot()],
  controllers: [CryptocurrencyController],
  providers: [CryptocurrencyService],
  exports:[CryptocurrencyService]
})
export class CryptocurrencyModule {}
