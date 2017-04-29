export class WorkSession {
  private start: Date;
  private end: Date;
  private duration: number;

  constructor(jsonObj?: JSON){
    if (jsonObj) {
      // do stuff with creating thorugh jsonObj
    } else {
      this.start = new Date();
    }
  }

  public endSession() {
    this.end = new Date();
    this.duration = this.end.getSeconds() - this.start.getSeconds();
  }

  public getDuration() {
    return this.duration;
  }
}
