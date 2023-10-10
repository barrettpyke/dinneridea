const pgp = require('pg-promise')();

const cn = 'postgres://barrettpyke:Logitech1*@localhost:5432/database';
const db = pgp(cn);

module.exports = db;
