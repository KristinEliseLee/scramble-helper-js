//random functions for learning purposes


function switchRandomSpots(list){
	const spot1 = getRandomNum(list.length);
	let spot2 = getRandomNum(list.length);
	while(spot2 === spot1){
		spot2 = getRandomNum(list.length);
	}
	let toSwitch = list[spot1];
	list[spot1] = list[spot2];
	list[spot2] = toSwitch;
}

const candy = new Map ([
  ['purple' , 'grape'],
  ['green' , 'apple'],
  ['yellow' , 'pineapple'],
  ['blue' , 'blueberry'],
  ['orange' , 'orange'] 
  ]);

function findFlavor(color){
	let flavor = candy.get(color);
	if (! flavor){
		console.log('Sorry, that color doesn\'t have a flavor');
		return;
	}
	else{
		return flavor;
	}
}

function findFlavors(colorList) {
	const flavors = colorList.map(color => candy.get(color));

	return flavors.map(flavor => {
		if(flavor === undefined){return null;}
		else {return flavor;}
	});
}

function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}

const wordsArray = ['potato', 'tomato', 'cat', 'potahto', 'tomahto', 'dog']




// Create a function that reverses a word
function reverseWord(word){
	const reversedWord = [];
	let i = word.length -1;
	while(i >= 0){
		reversedWord.push(word.charAt(i));
		i -= 1 ;
		}
	return reversedWord.join('');
}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

 function reverseWordsInSentence(sentence) {

 	const sentenceArray = sentence.split(' ');
 	const reversedWordArray = sentenceArray.map(word => reverseWord(word));
 	return reversedWordArray.join(' ');
 }

const toReverse = wordsArray.join(' ');

const reversedWordsArray = reverseWordsInSentence(toReverse).split(' ');


// Create a function that returns a random word from an array
function randWord(wordArray) {
	const num = getRandomNum(wordArray.length);
	return wordArray[num];
}



// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
