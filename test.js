const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post('/countchars', (req, res) => {
	var words = req.body.words;
	var character = req.body.character;
	var occurences = words.split(character).length - 1;
	res.send(occurences.toString());
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));