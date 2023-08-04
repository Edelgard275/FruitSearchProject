const input = document.querySelector('#fruit');
const suggestions = document.querySelector('#suggestions');

const allFruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Input = str in search bar
// Output = array of strings containing fruit to be shown in suggestion drop down
function search(str) {
	let results = [];
	str = str.toLowerCase();
	for (let fruit of allFruit) {
		if (fruit.toLowerCase().startsWith(str)) {
			results.push(fruit)
		}
	}
	return results;
}

function searchHandler(e) {
	let inputText = "";
	inputText = input.value;
	if (inputText) {
		let results = search(inputText)
		showSuggestions(results)
	}
}

function showSuggestions(results) {
	suggestions.innerHTML = "<ul>";
	for (let result of results) {
		suggestions.innerHTML += "<li>" + result + "</li>"
		}
	suggestions.innerHTML += "</ul>"
}

function hoverSelection(e) {
	let hoverResult = e.target;
	hoverResult.classList.add("hover")
}

function hoverRemover(e) {
	let hoverRemoved = e.target;
	hoverRemoved.classList.remove("hover")
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseover', hoverSelection);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseout', hoverRemover);