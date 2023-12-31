import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddTodoDto } from 'src/todo/dto/add-todo.dto';
import { EditTodoDto } from 'src/todo/dto/edit-todo.dto';
import { TodoDto } from 'src/todo/dto/todo.dto';
import { TodoService } from 'src/todo/services/todo/todo.service';

@Controller('todos')
export class TodoController {

    public constructor(private readonly todoServices: TodoService){}

    @Get()
    public findAll(): Promise<TodoDto[]> {
        return this.todoServices.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: number): Promise<TodoDto> {
        return this.todoServices.findOne(id)
    } 

    @Put(':id')
    public edit(@Param('id') id: number, @Body() todo: EditTodoDto): Promise<TodoDto> {
        return this.todoServices.edit(id, todo);
    }

    @Post()
    public add(@Body()todo: AddTodoDto): Promise<TodoDto> {
        return this.todoServices.add(todo);
    }

    @Delete(':id')
    public remove(@Param('id') id: number): Promise<TodoDto> {
        return this.todoServices.remove(id);
    }

}
