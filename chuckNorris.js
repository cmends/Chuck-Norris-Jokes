// const JOKE_CATEGORIES = [];

// renderjoke(joke){
//   //add joke to DOM
// };
// getRandomJoke(){

// };
// searchJoke(searchString){
//   // fetch joke with search param
//   //loop through results
//   //append to DOM
// };
// getJokeWithCategory(category){
//   // fetch joke with category
// };
// getCategories(){
//   //fetch categories
//   //append categories to select
// };


let randomBtn = document.getElementById("random-btn")
let searchBtn = document.getElementById("search-btn")
let categoryBtn = document.getElementById("category-btn")
let jokeSearch = document.getElementById("search-joke")
let fetchedJokes = document.getElementById("jokeArea")
let selectDropDown = document.getElementById("categoryArea")



async function getJokes() {
  const response = await fetch("https://api.chucknorris.io/jokes/random")
  // console.log(response);
  const data = await response.json();
  // console.log(data)  
    jokeArea.innerHTML += `<p> ID: ${data.id}</p> <p> Joke: ${data.value}`
}
// getJokes()


async function searchJokes() {
  const search = jokeSearch.value
  // console.log(search)
 const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
  const searchJoke = await response.json()
  // console.log(searchJoke)
  searchJoke.result.forEach(element => {jokeArea.innerHTML+=`<p> FoundJoke(category) : ${element.categories}</p> <p>Updated at: ${element.updated_at} `
  });
}
// searchJokes()

async function getCategories() {
  const response = await fetch("https://api.chucknorris.io/jokes/categories")
  // console.log(response)
  const getJokeCategories = await response.json()
  // console.log(getJokeCategories)
  getJokeCategories.forEach(element => {categoryArea.innerHTML += `<option value="${element}">${element}</option>`})
}
  getCategories()




async function getJokeFromCategories() {
  const catalogJoke = selectDropDown.value
  // console.log(catalogJoke)
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${catalogJoke}`)
  // console.log(response)
  const getJokeCatalog = await response.json()
  // console.log(getJokeCatalog)
 jokeArea.innerHTML = `<p>${getJokeCatalog.value}</p>`;

}
// getJokeFromCategories()




categoryBtn.addEventListener("click",async (e)  => {
  e.preventDefault()
getJokeFromCategories()
});

searchBtn.addEventListener("click",async (e)  => {
  e.preventDefault()
searchJokes()
});

randomBtn.addEventListener("click",async (e)  => {
    e.preventDefault()
    getJokes()
  
});
