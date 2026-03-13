import type { CreateFlowDto } from '@/flows/application/dtos/create-flow.dto';
import type { UpdateFlowDto } from '@/flows/application/dtos/update-flow.dto';
import type { FlowEntity } from '@/flows/domain/flow.entity';

export abstract class FlowRepository {
  abstract findAll(): Promise<FlowEntity[]>;
  abstract findById(id: string): Promise<FlowEntity | null>;
  abstract create(data: CreateFlowDto): Promise<FlowEntity>;
  abstract update(id: string, data: UpdateFlowDto): Promise<FlowEntity>;
  abstract delete(id: string): Promise<void>;
}
