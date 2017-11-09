export class AuthUser {
  email: string;
  password: string;
  activationCode: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.activationCode = '';
  }
}
