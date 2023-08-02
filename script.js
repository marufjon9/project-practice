let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elInputTime = document.querySelector(".form-time");
let elList = document.querySelector(".list");

let todos = [
  {
    title: "Wake up early",
    time: "06:00",
  },
  {
    title: "Morning workout",
    time: "06:30",
  },
  {
    title: "Take a shower",
    time: "07:00",
  },
  {
    title: "Breakfast",
    time: "07:30",
  },
  {
    title: "Go to work",
    time: "08:00",
  },
];

const renderToDos = function (array) {
  elList.innerHTML = "";
  array.forEach(function (item, index, array) {
    // li va 2 ta p ni yasab oldik
    let liElement = document.createElement("li");
    let titleElement = document.createElement("p");
    let timeElement = document.createElement("p");

    // li ning classListiga .lis__item nomli class qoshdik
    liElement.classList.add("list__item");

    // titleElement = p, pni textContentiga item ichidagi title ni tengladik
    titleElement.textContent = item.title;
    titleElement.classList.add("item-title");

    // time Element = p, pni textContentiga item ichidagi title ni tengladik
    timeElement.textContent = item.time;
    timeElement.classList.add("item-time");

    // hamma yaratib olingan elementlarni ichma ich tartiblab oldik
    liElement.appendChild(titleElement);
    liElement.appendChild(timeElement);

    // Htmlda turgan ul ga birlashtirib olgan elementimizni qoshdik
    elList.appendChild(liElement);
  });
};
renderToDos(todos);

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputValue = elInput.value.trim();
  let inputValueTime = elInputTime.value;
  console.log(inputValue, inputValueTime);

  let new_obj = {
    title: inputValue,
    time: inputValueTime,
  };

  todos.unshift(new_obj);
  renderToDos(todos);
});
