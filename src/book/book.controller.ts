import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.model';

@Controller('api/v1/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getallBook() {
    return this.bookService.getAllBook();
  }

  @Post()
  async create(@Body() postData: Book) {
    return this.bookService.createBook(postData);
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Book> {
    return this.bookService.getBook(id);
  }

  @Put(':id')
  async put(@Param('id') id: number, @Body() body: Book): Promise<Book> {
    await this.bookService.updateBook(id, body);

    return this.bookService.getBook(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Book> {
    return this.bookService.deleteBook(id);
  }
}
