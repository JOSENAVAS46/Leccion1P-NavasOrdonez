export class Persona {
  public name: string;
  public age: number;
  public email: string;
  public phone: string;
  public address: string;
  public dob: Date;

  constructor(
    name: string,
    age: number,
    email: string,
    phone: string,
    address: string,
    dob: Date
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.dob = dob;
  }
}
