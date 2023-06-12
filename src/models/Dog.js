const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("dog", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tail_length: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weigth: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
