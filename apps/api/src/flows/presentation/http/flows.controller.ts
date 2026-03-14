import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ZodSerializerDto } from 'nestjs-zod';
import { CreateFlowDto } from '@/flows/application/dtos/create-flow.dto';
import { FlowResponseDto } from '@/flows/application/dtos/flow-response.dto';
import { UpdateFlowDto } from '@/flows/application/dtos/update-flow.dto';
import { FlowRepository } from '@/flows/application/ports/flow.repository.port';
import type { FlowEntity } from '@/flows/domain/flow.entity';

@Controller('flows')
export class FlowsController {
  constructor(private readonly flowRepository: FlowRepository) {}

  @Post()
  @ZodSerializerDto(FlowResponseDto)
  create(@Body() dto: CreateFlowDto): Promise<FlowEntity> {
    return this.flowRepository.create(dto);
  }

  @Get()
  @ZodSerializerDto(FlowResponseDto)
  findAll(): Promise<FlowEntity[]> {
    return this.flowRepository.findAll();
  }

  @Get(':id')
  @ZodSerializerDto(FlowResponseDto)
  async findOne(@Param('id') id: string): Promise<FlowEntity> {
    const flow = await this.flowRepository.findById(id);
    if (!flow) throw new NotFoundException();
    return flow;
  }

  @Patch(':id')
  @ZodSerializerDto(FlowResponseDto)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateFlowDto
  ): Promise<FlowEntity> {
    const flow = await this.flowRepository.findById(id);
    if (!flow) throw new NotFoundException();
    return this.flowRepository.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    const flow = await this.flowRepository.findById(id);
    if (!flow) throw new NotFoundException();
    return this.flowRepository.delete(id);
  }
}
