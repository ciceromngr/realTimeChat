import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class rooms1635937365512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'rooms',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'roomid',
                        type: 'varchar'
                    },
                    {
                        name: 'user1',
                        type: 'integer'
                    },
                    {
                        name: 'user2',
                        type: 'integer'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUser1Rooms',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user1'],
                        onUpdate: 'SET NULL',
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'FKUser2Rooms',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user2'],
                        onUpdate: 'SET NULL',
                        onDelete: 'SET NULL'
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rooms')
    }

}