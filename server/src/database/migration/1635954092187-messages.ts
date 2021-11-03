import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class messages1635954092187 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'messages',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'room',
                        type: 'varchar'
                    },
                    {
                        name: 'msg',
                        type: 'varchar'
                    },
                    {
                        name: 'username',
                        type: 'varchar'
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('messages')
    }

}
