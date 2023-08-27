let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elInputTime = document.querySelector(".form-time");
let elList = document.querySelector(".list");
const btnRec = document.querySelector(".rec");

let todos = [
  {
    id: 1,
    title: "Wake up early",
    time: "06:00",
  },
  {
    id: 2,
    title: "Morning workout",
    time: "06:30",
  },
  {
    id: 3,
    title: "Take a shower",
    time: "07:00",
  },
  {
    id: 4,
    title: "Breakfast",
    time: "07:30",
  },
  {
    id: 5,
    title: "Go to work",
    time: "08:00",
  },
];

const renderToDos = function (array) {
  elList.innerHTML = "";
  array.forEach(function (item, index, array) {
    let liElement = document.createElement("li");
    let titleElement = document.createElement("p");
    let timeElement = document.createElement("p");
    let divElement = document.createElement("div");
    let delElelement = document.createElement("img");
    let editElement = document.createElement("img");

    // li ning classListiga .lis__item nomli class qoshdik
    liElement.classList.add("list__item");

    // titleElement = p, pni textContentiga item ichidagi title ni tengladik
    titleElement.textContent = item.title;
    titleElement.classList.add("item-title");

    // time Element = p, pni textContentiga item ichidagi title ni tengladik
    timeElement.textContent = item.time;
    timeElement.classList.add("item-time");

    divElement.classList.add("item__wrapper");

    editElement.classList.add("item__edit");
    editElement.setAttribute(
      "src",
      "https://www.svgrepo.com/show/474041/edit.svg",
    );
    editElement.dataset.id = item.id;

    delElelement.classList.add("item__del");
    delElelement.setAttribute(
      "src",
      "https://www.svgrepo.com/show/499905/delete.svg",
    );
    delElelement.dataset.id = item.id;

    divElement.append(timeElement, editElement, delElelement);
    liElement.append(divElement);

    // hamma yaratib olingan elementlarni ichma ich tartiblab oldik
    liElement.appendChild(titleElement);
    liElement.append(divElement);

    // liElement.appendChild(timeElement);

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
    id: todos.length ? todos.length + 1 : 1,
    title: inputValue,
    time: inputValueTime,
  };

  todos.push(new_obj);
  renderToDos(todos);
});

const record = new webkitSpeechRecognition();

btnRec.addEventListener("click", function () {
  record.start();

  record.onresult = function (e) {
    const recording = e.results[0][0].transcript;
    console.log(recording);

    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();

    let new_todos = {
      id: todos.length ? todos.length + 1 : 1,
      title: recording,
      time: `${hour}:${minute}`,
    };
    todos.unshift(new_todos);
    renderToDos(todos);
    console.log(todos);
  };
});

elList.addEventListener("click", function (e) {
  if (e.target.matches(".item__del")) {
    const deleteId = e.target.dataset.id;
    const foundObject = todos.findIndex((item) => {
      return (item.id = deleteId);
    });
    todos.splice(foundObject, 1);
    renderToDos(todos);
  }

  if (e.target.matches(".item__edit")) {
    let text = prompt("Edit content");
    let time = prompt("Edit time");

    const edit = e.target.dataset.id;

    const foundItem = todos.find((element) => {
      return element.id == edit;
    });

    foundItem.title = text;
    foundItem.time = time;

    renderToDos(todos);
  }
});
