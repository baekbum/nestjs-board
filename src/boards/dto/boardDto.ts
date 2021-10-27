/* eslint-disable prettier/prettier */
import { BoardStatus } from '../boards.model';
export class CreateDto {
  id: string;
  title: string;
  desc: string;
}

export class UpdateDto {
  title: string;
  desc: string;
  status: BoardStatus;
}
