import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateDto, UpdateDto } from './dto/boardDto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/all')
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Get('/:number')
  getBoardByNum(@Param('number') number: string): Board {
    return this.boardService.getBoardByNum(number);
  }

  @Post('/create')
  //createBoard(@Body() body): string {
  // createBoard(
  //   @Body('id') id: string,
  //   @Body('title') title: string,
  //   @Body('desc') desc: string,
  // ): string {
  createBoard(@Body() createDto: CreateDto): string {
    return this.boardService.createBoard(createDto);
  }

  @Put('/:number')
  updateBoard(
    @Param('number') number: string,
    @Body() updateDto: UpdateDto,
  ): Board {
    return this.boardService.updateBoard(number, updateDto);
  }

  @Delete('/:number')
  deleteBoard(@Param('number') number: string): string {
    return this.boardService.deleteBoard(number);
  }
}
