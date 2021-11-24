'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert('Users', [{
		userId: 'minskim',
		name: '김민수',
		engName: 'minsukim',
		createdAt: '2021-11-21',
		updatedAt: '2021-11-21'
	},{
		userId: 'minskim2',
		name: '김민석',
		engName: 'minseokkim',
		createdAt: '2021-11-21',
		updatedAt: '2021-11-21'
	},{
		userId: 'minskim3',
		name: '김민서',
		engName: 'minseokim',
		createdAt: '2021-11-21',
		updatedAt: '2021-11-21'
	}], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
