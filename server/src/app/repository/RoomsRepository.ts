import { EntityRepository, Repository } from "typeorm";
import { Rooms } from "../../database/entity/Rooms";

@EntityRepository(Rooms)
class RoomsRepository extends Repository<Rooms>{

}

export { RoomsRepository }