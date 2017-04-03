export class TodoItem {
  public id: number;
  public item: string;
  public status: boolean;

  constructor(id: number, item: string, status: boolean){
    this.id = id;
    this.item = item;
    this.status = status;
  }
}
