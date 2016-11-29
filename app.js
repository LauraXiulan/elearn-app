// Set up libraries
const sequelize 	= require('sequelize')
const express 		= require('express')
const bodyParser 	= require('body-parser')
const session 		= require('express-session')
const pug			= require('pug')
const pg 			= require('pg')
const bcrypt		= require('bcrypt-node')
const sass			= require('node-sass')
const db			= require(__dirname + '/modules/database.js')

const app			= express()

app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views' )

// Routes
let loginRoute 		= require(__dirname + '/routes/login')
let logoutRoute 	= require(__dirname + '/routes/logout')
let profileRoute	= require(__dirname + '/routes/profile')
let memoryNLRoute	= require(__dirname + '/routes/memory-nl')
let memoryESRoute	= require(__dirname + '/routes/memory-es')
let memoryFRRoute	= require(__dirname + '/routes/memory-fr')

app.use( express.static('static'))
app.use( bodyParser.urlencoded({extended: true}))
app.use(session({
	secret: 'security is important',
	resave: true,
	saveUninitialized: false
}))

// Routes
app.use( loginRoute )
app.use( logoutRoute )
app.use( profileRoute ) 
app.use( memoryNLRoute )
app.use( memoryESRoute )
app.use( memoryFRRoute )

//Quiz App Demo
app.get('/quiz', (request, response) => {
	response.render('demoquiz')
})

app.post('/quiz-food-NL', (request, response) => {
	console.log(request.body) //{input: '5/5'}
})

//listen port 8000
app.listen(8000, () => {
	console.log('Server is running')
})