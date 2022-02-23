import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );  
  app.setBaseViewsDir(join(__dirname, '..', 'public', "html" ));
  app.useStaticAssets(join(__dirname, '..', "public"));
  // app.useStaticAssets(join(__dirname, '..', 'public', "html"));
  hbs.registerPartials(join(__dirname, '..',"public" ,'html', "partials"));  
  hbs.registerHelper("eq", function(value, valueTwo ,options)
  {
      return value == valueTwo;
  });

  hbs.registerHelper("dec", function(value, options)
  {
      return parseInt(value) - 1;
  });

  hbs.registerHelper("fix", function(value, options)
  {
      return parseFloat(value).toFixed(2).toString() + "$"
  });

  app.setViewEngine('hbs');


  await app.listen(8000);
}
bootstrap();
