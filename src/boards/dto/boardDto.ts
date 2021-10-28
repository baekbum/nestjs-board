/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../boards.model';
export class CreateDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  desc: string;
}

export class UpdateDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  desc: string;
  @IsNotEmpty()
  status: BoardStatus;
}
