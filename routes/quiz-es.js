//Quiz ES routes

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')

//Food ES Quiz
router.get('/quiz-food-es', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-food-es', (request, response) => {
	let input = request.body.input
	if (input.substring(0,1) == 0) {
		input = 0
	}
	else if (input.substring(0,1) == 1) {
		input = 20
	}
	else if (input.substring(0,1) == 2) {
		input = 40
	}
	else if (input.substring(0,1) == 3) {
		input = 60
	}
	else if (input.substring(0,1) == 4) {
		input = 80
	}
	else if (input.substring(0,1) == 5) {
		input = 100
	}
	db.quiz.findOne({
		where: {
			id: 1
		}
	}).then(id => {
		if(id.score == 0 || input > id.score) {
			id.update ({
				finished: true,
				score: input
			}).then(id => {
				response.send('done')
			})
		}
		else {
			response.send('done')
		}
	})
})

//Animal ES Quiz
router.get('/quiz-animal-es', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-animal-es', (request, response) => {
	let input = request.body.input
	if (input.substring(0,1) == 0) {
		input = 0
	}
	else if (input.substring(0,1) == 1) {
		input = 20
	}
	else if (input.substring(0,1) == 2) {
		input = 40
	}
	else if (input.substring(0,1) == 3) {
		input = 60
	}
	else if (input.substring(0,1) == 4) {
		input = 80
	}
	else if (input.substring(0,1) == 5) {
		input = 100
	}
	db.quiz.findOne({
		where: {
			id: 1
		}
	}).then(id => {
		if(id.score == 0 || input > id.score) {
			id.update ({
				finished: true,
				score: input
			}).then(id => {
				response.send('done')
			})
		}
		else {
			response.send('done')
		}
	})
})

//Family ES Quiz
router.get('/quiz-family-es', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-family-es', (request, response) => {
	let input = request.body.input
	if (input.substring(0,1) == 0) {
		input = 0
	}
	else if (input.substring(0,1) == 1) {
		input = 20
	}
	else if (input.substring(0,1) == 2) {
		input = 40
	}
	else if (input.substring(0,1) == 3) {
		input = 60
	}
	else if (input.substring(0,1) == 4) {
		input = 80
	}
	else if (input.substring(0,1) == 5) {
		input = 100
	}
	db.quiz.findOne({
		where: {
			id: 1
		}
	}).then(id => {
		if(id.score == 0 || input > id.score) {
			id.update ({
				finished: true,
				score: input
			}).then(id => {
				response.send('done')
			})
		}
		else {
			response.send('done')
		}
	})
})

module.exports = router