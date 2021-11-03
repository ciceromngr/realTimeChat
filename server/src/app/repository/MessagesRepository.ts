import { EntityRepository, Repository } from "typeorm";
import { Messages } from "../../database/entity/Messages";

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages>{

}

export { MessagesRepository }