import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      password: 'password',
    },
    {
      id: 2,
      name: 'Jane Doe',
      username: 'janedoe',
      password: 'anotherpassword',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
