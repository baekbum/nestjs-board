import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  getBoardByNum(number: number): Board {
    try {
      const findBoard: Board = this.isExistBoard(number);

      return findBoard;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('해당 게시글은 존재하지 않습니다.');
    }
  }

  createBoard(createDto: CreateDto): Board {
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

      return board;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('게시글을 등록하지 못했습니다.');
    }
  }

  updateBoard(number: number, updateDto: UpdateDto): Board {
    const { title, desc, status } = updateDto;
    const target = this.getBoardByNum(number);

    try {
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
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('게시글을 수정하지 못했습니다.');
    }
  }

  deleteBoard(number: number): string {
    try {
      const findBoard: Board = this.isExistBoard(number);
      this.boards = this.boards.filter(
        (board) => board.number !== findBoard.number,
      );

      return '게시글이 삭제되었습니다.';
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('게시글을 삭제하지 못했습니다.');
    }
  }

  isExistBoard(number: number): Board {
    const findBoard: Board = this.boards.find(
      (board) => board.number === number,
    );

    if (findBoard == null) {
      throw Error();
    }

    return findBoard;
  }
}
