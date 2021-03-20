const express = require('express');
const router = express.Router();
const validate = require('./validation');
const lib = require("./lib");

router.post('/countchars', validate.add,(req, res) => {				
	const occurrences = lib.countOccurrences(req.body.character, req.body.words);
	res.set('Content-Type', 'text/html')
	res.send(occurrences);
});

module.exports = router;