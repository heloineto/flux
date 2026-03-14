import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlowDto } from '@/flows/application/dtos/create-flow.dto';
import { UpdateFlowDto } from '@/flows/application/dtos/update-flow.dto';
import { FlowRepository } from '@/flows/application/ports/flow.repository.port';
import { FlowEntity } from '@/flows/domain/flow.entity';

@Injectable()
export class TypeOrmFlowRepository extends FlowRepository {
  constructor(
    @InjectRepository(FlowEntity)
    private readonly repo: Repository<FlowEntity>
  ) {
    super();
  }

  findAll(): Promise<FlowEntity[]> {
    return this.repo.find();
  }

  findById(id: string): Promise<FlowEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async create(data: CreateFlowDto): Promise<FlowEntity> {
    const flow = this.repo.create(data);
    return this.repo.save(flow);
  }

  async update(id: string, data: UpdateFlowDto): Promise<FlowEntity> {
    await this.repo.update(id, data);
    return this.repo.findOneByOrFail({ id });
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
