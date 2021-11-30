require('dotenv').config();
const env = process.env;

const development = {
	username: env.DB_USER,
	password: env.DB_PASSWOED,
	database: env.DB_NAME,
	host: env.DB_HOST,
	port: env.SERVER_PORT,
	dialect: "mysql",
	operatorAliases: false
};

const production = {
	username: env.DB_USER,
	password: env.DB_PASSWOED,
	database: env.DB_NAME,
	host: env.DB_HOST,
	port: env.SERVER_PORT,
	dialect: "mysql",
	operatorAliases: false
};

const test = {
	username: env.DB_USER,
	password: env.DB_PASSWOED,
	database: env.DB_NAME,
	host: env.DB_HOST,
	port: env.SERVER_PORT,
	dialect: "mysql",
	operatorAliases: false
};

module.exports = { development, production, test };
