var Todos = require('../models/todoModel');

module.exports = function(app) {
	
	app.get('/api/setupTodos', function(req, res) {
	
		var starterTodos = [
			{
				username: 'dummyUser',
				todo: 'Buy milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'dummyUser',
				todo: 'Wash clothes',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'dummyUser',
				todo: 'Learn Node',
				isDone: false,
				hasAttachment: false
			}
		];
		
		Todos.create(starterTodos, function(err, results){
			if(err) throw err;
			res.send(results);
		});
	});
}