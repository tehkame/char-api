const express = require('express');
const router = express.Router();
const validate = require('./validation');
const lib = require("./lib");
const { handleError, ErrorHandler } = require('./helpers/error');

router.post('/countchars', validate.add,(req, res) => {		
	try {		
		const { character, words } = req.body;
		const occurrences = lib.countOccurrencesInCollection(character, words);
		res.send(occurrences.toString());
	} catch (error) {
		throw new ErrorHandler(500, 'Internal server error');
	  }
});

module.exports = router;