const input = document.querySelector("#fruit");
const suggestions = document.querySelector("#suggest");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let matches = [];
  if (!str) return matches;
  let lowercaseInput = str.toLowerCase();
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].toLowerCase().includes(lowercaseInput)) {
      matches.push(fruit[i]);
    }
  } // TODO
  return matches;
}

function searchHandler(e) {
  const results = search(e.target.value);
  showSuggestions(results, e.target.value);
  // TODO
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const fruit = results[i];
    var strRegExp = new RegExp(inputVal, "gi");
    const boldFruit = fruit.replace(strRegExp, "<b>$&</b>");
    suggestions.innerHTML += `<li>${boldFruit}</li>`;
  }
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
  }
  // TODO
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
