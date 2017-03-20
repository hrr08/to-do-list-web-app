var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds137360.mlab.com:37360/my-todo-list'
	}
}