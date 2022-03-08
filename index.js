/**
 * @param {string} key 
 */
function fireKey(key) {
	window.dispatchEvent(
		new KeyboardEvent(
			'keydown',
			{
				key,
			},
		),
	);
}

/**
 * @param {string} word 
 */
function typeWord(word) {
	for (const char of word.split('')) {
		fireKey(char.toLowerCase());
	}
	fireKey('Enter');
}

/**
 * @param {number} ms 
 */
async function sleep(ms) {
	return await new Promise(r => setTimeout(r, ms));
}

async function solvePuzzle() {
	// start with the best word
	typeWord(document.getElementsByTagName('game-app')[0].solution);
}

solvePuzzle();

function reset() {
	localStorage.setItem('nyt-wordle-state', '');
}
