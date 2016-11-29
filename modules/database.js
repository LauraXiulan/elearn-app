// DB Object

const db = { }

// Setup SQL
const sequelize = require( 'sequelize' )
const bcrypt		= require('bcrypt-node')

// db.sequelize = sequelize
db.conn = new sequelize('elearn', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres'
})

// db.conn = new sequelize('postgres://floriandalhuijsen@localhost/elearn')


//>>>>>>>>>>> MODELS

db.user = db.conn.define('user', {
	fullName: sequelize.STRING,
	userName: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

db.game = db.conn.define('game', {
	language: sequelize.STRING,
	theme: sequelize.STRING,
	finished: sequelize.BOOLEAN,
	score: sequelize.INTEGER
})

db.quiz = db.conn.define('quiz', {
	language: sequelize.STRING,
	theme: sequelize.STRING,
	finished: sequelize.BOOLEAN,
	score: sequelize.INTEGER
})


// Define relationships between tables
// db.game.hasMany(db.user)
// db.user.belongsTo(db.game)
// db.quiz.hasMany(db.user)
// db.user.belongsTo(db.quiz)

// Create test User
db.conn.sync({force: true}).then( database => {
	bcrypt.hash('password1', null, null, (err, hash) => {
		db.user.create({
			fullName: "Ilana Enderman",
			userName: "ienderman",
			email: "ilana@hotmail.com",
			password: hash
		})
		db.game.create({
			language: 'NL',
			theme: "food",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'NL',
			theme: "animal",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'NL',
			theme: "family",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'ES',
			theme: "food",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'ES',
			theme: "animal",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'ES',
			theme: "family",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'FR',
			theme: "food",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'FR',
			theme: "animal",
			finished: false,
			score: 0
		})
		db.game.create({
			language: 'FR',
			theme: "family",
			finished: false,
			score: 0
		})
		db.quiz.create({
			language: 'NL',
			theme: 'animal',
			finished: false,
			score: 0
		})
	})
})


module.exports = db
