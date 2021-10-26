import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    {
      id: 'admin',
      number: 1,
      title: '공지사항',
      desc: '공지사항 입니다.',
      status: BoardStatus.PUBLIC,
    },
  ];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
