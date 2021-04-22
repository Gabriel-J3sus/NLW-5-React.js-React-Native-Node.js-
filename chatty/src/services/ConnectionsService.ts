import { getCustomRepository, Repository } from 'typeorm'

import { Connection } from '../entities/Connection'
import { ConnectionsRepository } from '../repositories/ConnectionsRepository'

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string
}

class ConnectionsService {
  private connectionRespository: Repository<Connection>

  constructor() {
    this.connectionRespository = getCustomRepository(ConnectionsRepository)
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionRespository.create({
      socket_id,
      user_id,
      admin_id,
      id
    })

    await this.connectionRespository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionRespository.findOne({ user_id })

    return connection;
  }
}

export { ConnectionsService }
