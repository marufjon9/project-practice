let elList = document.querySelector(".pokemon__list");

const renderPokemon = function (array) {
  array.forEach((element) => {
    let liElement = document.createElement("li");

    let imgElement = document.createElement("img");
    let weightElement = document.createElement("p");
    let heightElement = document.createElement("p");
    let eggElement = document.createElement("p");
    let spawnElement = document.createElement("p");
    let nameElement = document.createElement("p");

    liElement.classList.add("pokemon__item");

    imgElement.setAttribute("src", element.img);
    imgElement.setAttribute("alt", element.name);
    imgElement.classList.add("item__img");

    weightElement.textContent = `Weight: ${element.weight}`;
    weightElement.classList.add("item__weight");

    heightElement.textContent = `Height: ${element.height}`;
    heightElement.classList.add("item__height");

    eggElement.textContent = `Egg: ${element.egg}`;
    eggElement.classList.add("item__egg");

    spawnElement.textContent = `Spawn time: ${element.spawn_time}`;
    spawnElement.classList.add("item__spawn");

    nameElement.textContent = element.name;
    nameElement.classList.add("item__name");

    liElement.appendChild(imgElement);
    liElement.appendChild(weightElement);
    liElement.appendChild(heightElement);
    liElement.appendChild(eggElement);
    liElement.appendChild(spawnElement);
    liElement.appendChild(nameElement);

    elList.appendChild(liElement);
  });
};

renderPokemon(pokemons);
