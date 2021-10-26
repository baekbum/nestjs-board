/* eslint-disable prettier/prettier */
export type Board = {
  id: string;
  number: number;
  title: string;
  desc: string;
  status: BoardStatus;
};

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRAVATE = 'PRAVATE',
}
