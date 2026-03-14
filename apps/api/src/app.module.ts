import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod';
import { IamModule } from '@/iam/iam.module';
import { HttpExceptionFilter } from '@/common/presentation/http/http-exception.filter';
import { CoreModule } from '@/core/core.module';
import { FlowsModule } from '@/flows/flows.module';
import { TenantsModule } from '@/tenants/tenants.module';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [
    CoreModule.forRoot(),
    IamModule,
    FlowsModule,
    UsersModule,
    TenantsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
