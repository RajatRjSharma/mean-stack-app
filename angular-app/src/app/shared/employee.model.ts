export class Employee {
  _id!: string;
  name!: string;
  position!: string;
  office!: string;
  salary!: number;

  constructor(data?: any) {
    this._id = data && data._id ? data._id : '';
    this.name = data && data.name ? data.name : '';
    this.position = data && data.position ? data.position : '';
    this.office = data && data.office ? data.office : '';
    this.salary = data && data.salary ? data.salary : null;
  }
}
