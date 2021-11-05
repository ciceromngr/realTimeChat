import { EntityRepository, Repository } from "typeorm";
import { JoinRoom } from "../../database/entity/JoinRoom";

@EntityRepository(JoinRoom)
class JoinRoomRepository extends Repository<JoinRoom>{ }

export { JoinRoomRepository }