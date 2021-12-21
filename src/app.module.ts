import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CatsModule } from './cats/cats.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
// import { UserModule } from './user/user.module';
// import { User } from './user/user.entity';

@Module({
  // imports: [PostsModule, CatsModule, TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: 'zuozuo2484',
  //     database: 'mysql',
  //     entities: [User],
  //     synchronize: true,
  // }), UserModule],
  imports: [PostsModule, CatsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET }, {path: 'posts', method: RequestMethod.GET});
  }
}
