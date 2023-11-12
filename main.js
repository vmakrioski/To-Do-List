const newItemInput = document.getElementById("newItemInput");
const items = document.getElementById("items");
let i = 0;
let toDoList = [];

const showList = (array = toDoList) => {
  items.innerHTML = ``;
  array.forEach((element) => {
    const item = document.createElement("div");
    item.classList.add("item");
    items.appendChild(item);

    const span = document.createElement("span");
    span.classList.add(element.done ? "done" : "do");
    item.appendChild(span);
    span.innerHTML = element.name;
    span.onclick = () => {
      element.done = !element.done;
      showList();
    };

    const button = document.createElement("button");
    button.innerHTML = `<i class="bi bi-trash"></i>`;
    item.appendChild(button);
    button.onclick = () => {
      const newArray = toDoList.filter((toDo) => toDo.id !== element.id);
      toDoList = newArray;
      showList();
    };
  });
};

const addToList = () => {
  if (newItemInput.value === "") return alert("Please enter a task");
  toDoList.push({ id: i, name: newItemInput.value, done: false });
  i++;
  showList();
  newItemInput.value = "";
};

//SEARCH INPUT
function searchList(e) {
  e.preventDefault();
  const search = document.getElementById("search").value;
  if (e.target.value === "") return showList();
  const filterToDoList = toDoList.filter((task) => {
    console.log(toDoList);
    return task.name.toLowerCase().includes(search);
  });

  showList(filterToDoList);
}