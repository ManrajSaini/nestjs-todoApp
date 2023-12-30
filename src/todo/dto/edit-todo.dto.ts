export class EditTodoDto {
    
    public readonly title: string;
    public readonly completed: boolean;

    public constructor(opts?: Partial<EditTodoDto>) {
        Object.assign(this, opts);
    }

}