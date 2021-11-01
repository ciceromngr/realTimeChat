import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../database/entity/Users";

@EntityRepository(Users)
class UsersRepository extends Repository<Users>{
    
}

export { UsersRepository }