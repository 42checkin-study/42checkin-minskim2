const Sequelize = require('sequelize');

module.exports = ((sequelize, DataTypes) =>{
	return sequelize.define('User', {
		name: {
			type: Sequelize.STRING(100),
			unique: true,
		},
		email: {
			type: Sequelize.STRING(40),
			allowNull: true,
		},
		snsId: {
			type: Sequelize.STRING(30),
			allowNull: true,
		},
	},{
		timestamps: true,
		paranoid: true,
	})
});
