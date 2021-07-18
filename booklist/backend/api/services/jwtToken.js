var jwt = require('jsonwebtoken');

module.exports = {
	'sign': function(payload) {
		return jwt.sign({
			data: payload
		}, sails.config.secretKey);
	},
	'verify': function(token, callback) {
		jwt.verify(token, sails.config.secretKey, callback);
	}
};