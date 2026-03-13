import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { isoDatetimeTransformer } from '@/common/infrastructure/transformers/iso-date-string.transformer';

@Entity('flows')
export class FlowEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
  @Column() authorId: string;
  @Column() tenantId: string;
  @CreateDateColumn({ transformer: isoDatetimeTransformer }) createdAt: string;
  @UpdateDateColumn({ transformer: isoDatetimeTransformer }) updatedAt: string;
}
