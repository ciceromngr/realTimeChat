import { createConnection } from "typeorm";
import { MessageGlobal } from "./entity/MessageGlobal";
import { Messages } from "./entity/Messages";
import { Rooms } from "./entity/Rooms";
import { Users } from "./entity/Users";

createConnection(
    {
        type: "sqlite",
        database: "src/database/database.sqlite",
        entities: [
            Users,
            MessageGlobal,
            Rooms,
            Messages
        ],
        migrations: ["src/database/migration/*.ts"],
        cli: {
            migrationsDir: "src/database/migration",
            entitiesDir: "src/database/entity"
        }
     }
)