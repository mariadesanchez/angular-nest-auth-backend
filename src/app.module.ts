import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //en producción
    MongooseModule.forRoot( process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    
    }),
    // En Local
    // MongooseModule.forRoot( process.env.MONGO_URI),
    
  

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
