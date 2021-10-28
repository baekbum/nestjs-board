import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
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
  getBoardByNum(@Param('number', ParseIntPipe) number: number): Board {
    return this.boardService.getBoardByNum(number);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  //createBoard(@Body() body): string {
  // createBoard(
  //   @Body('id') id: string,
  //   @Body('title') title: string,
  //   @Body('desc') desc: string,
  // ): string {
  createBoard(@Body() createDto: CreateDto): Board {
    return this.boardService.createBoard(createDto);
  }

  @Put('/:number')
  @UsePipes(ValidationPipe)
  updateBoard(
    @Param('number', ParseIntPipe) number: number,
    @Body() updateDto: UpdateDto,
  ): Board {
    return this.boardService.updateBoard(number, updateDto);
  }

  @Delete('/:number')
  deleteBoard(@Param('number', ParseIntPipe) number: number): string {
    return this.boardService.deleteBoard(number);
  }
}
