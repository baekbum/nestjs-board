import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { CreateDto, UpdateDto } from './dto/boardDto';

@Injectable()
export class BoardsService {
  public static num = 0;

  private boards: Board[] = [
    // {
    //   id: 'admin',
    //   number: BoardsService.num++,
    //   title: '공지사항',
    //   desc: '공지사항 입니다.',
    //   status: BoardStatus.PUBLIC,
    // },
  ];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardByNum(number: string): Board {
    const findBoard: Board = this.boards.find(
      (board) => board.number === parseInt(number),
    );

    return findBoard;
  }

  createBoard(createDto: CreateDto): string {
    const { id, title, desc } = createDto;
    try {
      const board = {
        id,
        number: ++BoardsService.num,
        title,
        desc,
        status: BoardStatus.PUBLIC,
      };

      this.boards.push(board);

      console.log(`current id: ${BoardsService.num}`);

      return 'succ';
    } catch (error) {
      console.log(error);
      return 'err';
    }
  }

  updateBoard(number: string, updateDto: UpdateDto): Board {
    const { title, desc, status } = updateDto;
    const target = this.getBoardByNum(number);

    if (title.length > 0) {
      target.title = title;
    }

    if (desc.length > 0) {
      target.desc = desc;
    }

    if (target.status !== status) {
      target.status = status;
    }

    return target;
  }

  deleteBoard(number: string): string {
    try {
      this.boards = this.boards.filter(
        (board) => board.number !== parseInt(number),
      );

      return 'succ';
    } catch (error) {
      console.log(error);
      return 'err';
    }
  }
}
