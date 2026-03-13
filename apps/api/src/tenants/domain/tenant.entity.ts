import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tenants')
export class TenantEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
}
