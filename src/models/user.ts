// import { Optional } from 'sequelize';
// import {
//   Column,
//   CreatedAt,
//   DataType,
//   Model,
//   Table,
//   UpdatedAt,
// } from 'sequelize-typescript';

// interface UserAttributes {
//   id: number;
//   name: string;
// }

// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// @Table({
//   timestamps: true,
//   tableName: 'users',
//   modelName: 'User',
// })
// class User extends Model<UserAttributes, UserCreationAttributes> {
//   @Column({
//     primaryKey: true,
//     type: DataType.UUID,
//     defaultValue: DataType.UUIDV4,
//   })
//   declare id: string;

//   @Column({
//     type: DataType.STRING,
//   })
//   declare type: string;

//   @CreatedAt
//   declare createdAt: Date;

//   @UpdatedAt
//   declare updatedAt: Date;
// }

// export default User;
