const Sequelize = require('sequelize');

module.exports = ((sequelize, DataTypes) =>{
	return sequelize.define('User', {
		email: {
			type: Sequelize.STRING(40),
			allowNull: true,
			unique: true,
		},
		nick: {
			type: Sequelize.STRING(100),
			allowNull: true,
		},
		prvider: {
			type: Sequelize.STRING(10),
			allowNull: false,
			defaultValue: 'local',
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
