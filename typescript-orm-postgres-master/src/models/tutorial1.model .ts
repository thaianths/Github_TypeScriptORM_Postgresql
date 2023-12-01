import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "tutorial1s",
})
export default class Tutorial1 extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "title"
  })
  title?: string;

  @Column({
    type: DataType.STRING(255),
    field: "description"
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "published"
  })
  published?: boolean;
}
