import { DataTypes, Model } from 'sequelize';
import connection from '.';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  teamName: {
    type: DataTypes.STRING,
  },
}, { sequelize: connection, tableName: 'teams', timestamps: false, underscored: true });

export default Team;
