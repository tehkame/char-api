function countOccurrences(searchString, inString) {
	var searchExpression = new RegExp(searchString, 'g');
	var occurences = (inString.match(searchExpression) || []).length;
	return occurences.toString();
}

module.exports = { countOccurrences };