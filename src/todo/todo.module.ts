import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo/todo';
import { TodoService } from './services/todo/todo.service';
import { TodoMapperService } from './services/todo-mapper/todo-mapper.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo])
    ],
    providers: [TodoService, TodoMapperService],
    controllers: []
})
export class TodoModule {}
