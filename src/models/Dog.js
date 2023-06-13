const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"dog",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				get() {
					return this.getDataValue("id");
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				get() {
					return this.getDataValue("name");
				},
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
				get() {
					const rawColor = this.getDataValue("color");
					return rawColor.replaceAll(" ", "");
				},
			},
			tail_length: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isInt: true,
					min: 0,
				},
				get() {
					return this.getDataValue("tail_length");
				},
			},
			weight: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isInt: true,
					min: 0,
				},
				get() {
					return this.getDataValue("weight");
				},
			},
		},
		{
			timestamps: false,
		}
	);
};
