const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"dog",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
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
				validate: {
					isInt: true,
					min: 0,
				},
			},
			weight: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isInt: true,
					min: 0,
				},
			},
		},
		{
			timestamps: false,
		}
	);
};
