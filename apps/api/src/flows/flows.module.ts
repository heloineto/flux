import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlowRepository } from '@/flows/application/ports/flow.repository.port';
import { FlowEntity } from '@/flows/domain/flow.entity';
import { TypeOrmFlowRepository } from '@/flows/infrastructure/typeorm/typeorm-flow.repository';
import { FlowsController } from '@/flows/presentation/http/flows.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FlowEntity])],
  providers: [{ provide: FlowRepository, useClass: TypeOrmFlowRepository }],
  controllers: [FlowsController],
})
export class FlowsModule {}
