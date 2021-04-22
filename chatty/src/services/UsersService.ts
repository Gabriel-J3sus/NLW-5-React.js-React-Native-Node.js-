import { getCustomRepository, Repository } from "typeorm"

import { User } from "../entities/User";
import { UsersRepository } from '../repositories/UsersRepository'

class UsersService {
  private usersRespository: Repository<User>

  constructor() {
    this.usersRespository = getCustomRepository(UsersRepository);
  }

  async create(email: string ) {
    const userExists = await this.usersRespository.findOne({ email })

    if (userExists) {
      return userExists;
    }

    const user = this.usersRespository.create({ email })

    await this.usersRespository.save(user)

    return user;

  }
}

export { UsersService }
