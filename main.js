let elList = document.querySelector(".pokemon__list");
let elSearch = document.querySelector(".pokemon__input");

const renderPokemon = function (array) {
  array.forEach((element) => {
    let liElement = document.createElement("li");

    let imgElement = document.createElement("img");
    let weightElement = document.createElement("p");
    let heightElement = document.createElement("p");
    let eggElement = document.createElement("p");
    let spawnElement = document.createElement("p");
    let nameElement = document.createElement("p");

    let btnMore = document.createElement("button");
    btnMore.classList.add("btnmore", "modal-btn");
    btnMore.textContent = "More info";
    btnMore.setAttribute("type", "button");
    btnMore.setAttribute("data-bs-toggle", "modal");
    btnMore.setAttribute("data-bs-target", "#exampleModal");
    btnMore.dataset.id = element.id;

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

    // liElement.appendChild(imgElement);
    // liElement.appendChild(weightElement);
    // liElement.appendChild(heightElement);
    // liElement.appendChild(eggElement);
    // liElement.appendChild(spawnElement);
    // liElement.appendChild(nameElement);

    liElement.append(imgElement, nameElement, btnMore);

    elList.appendChild(liElement);
  });
};

renderPokemon(pokemons);

elSearch.addEventListener("keyup", function () {
  elList.innerHTML = "";
  const searchValue = elSearch.value.trim().toLowerCase();

  let result = pokemons.filter(function (element) {
    let searchName = element.name.toLowerCase();
    return searchName.includes(searchValue);
  });

  renderPokemon(result);
});

const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelector(".modal-btn");
const modalHeight = document.querySelector(".second");
const modalegg = document.querySelector(".egg");
const modalSpawn = document.querySelector(".spawn");

elList.addEventListener("click", function (e) {
  if (e.target.matches(".modal-btn")) {
    const btnId = e.target.dataset.id;
    const found = pokemons.find((item) => (item.id = btnId));
    modalTitle.textContent = `Name: ${found.name}`;
    modalBody.textContent = `Weight: ${found.weight}`;
    modalHeight.textContent = `Height: ${found.height}`;
    modalegg.textContent = `Egg: ${found.egg}`;
    modalSpawn.textContent = `Spawn time: ${found.spawn_time}`;
  }
});
