import { EntityRepository, Repository } from "typeorm";
import { MessageGlobal } from "../../database/entity/MessageGlobal";

@EntityRepository(MessageGlobal)
class MessageGlobalRepository extends Repository<MessageGlobal>{

}

export { MessageGlobalRepository }