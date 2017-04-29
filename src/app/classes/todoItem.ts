import {WorkSession} from "./workSession";

export class TodoItem {
  public id: number;
  public item: string;
  public status: boolean;
  public workSessions: WorkSession[];

  constructor(id: number, item: string, status: boolean, sessions?: WorkSession[]){
    this.id = id;
    this.item = item;
    this.status = status;
    if (sessions) {
      this.workSessions = sessions;
    } else {
      this.workSessions = [];
    }
  }
}
