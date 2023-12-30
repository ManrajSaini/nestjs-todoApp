import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/todo/dto/todo.dto';
import { Todo } from 'src/todo/entities/todo/todo';

@Injectable()
export class TodoMapperService {

    public modelToDto({ id, title, completed }: Todo): TodoDto {
        return new TodoDto({ id, title, completed });
    }

}
