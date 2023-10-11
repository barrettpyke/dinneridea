const pgp = require('pg-promise')();

const cn = 'postgres://barrettpyke:Logitech1*@localhost:5432/dinner_idea';
const db = pgp(cn);

module.exports = db;
