
function countOccurrences(character, word) {
	const searchExpression = new RegExp(character, 'g');
	return (word.match(searchExpression) || []).length;
}

function countOccurrencesInCollection(character, words) {
	return words.reduce((count, word) => count + countOccurrences(character, word),0);
}

module.exports = { countOccurrencesInCollection, countOccurrences };