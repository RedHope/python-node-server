import base from "../base_entity";

export class Exam extends base {
  constructor(
    public title: string,
    public description: string,
    public id?: number
  ) {
    super(title);
  }
}
