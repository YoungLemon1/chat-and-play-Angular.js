class User {
  constructor(
    public id?: number,
    public username: string = '',
    public password: string = '',
    public isOnline: boolean = true
  ) {}
}

export default User;
