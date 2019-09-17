var form = document.forms[0];
window.onload = () => {setOnSubmitForm();};

function setOnSubmitForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  returnForm();
})
}

function returnForm() {
  var list = [];
  for (item of form.elements) {
    list.push([item.type, item.name, item.value]);
  }
  displayList(list);
}

function displayList(list) {
  var displayElement = document.createElement("div");
  list.forEach((item, index) => {
    let itemElement = document.createElement("p");
  itemElement.innerHTML = `<b>${index}</b>: ${item[0]} <br><b>${item[1]}</b>: ${item[2]}`
  displayElement.appendChild(itemElement);
});
  document.body.appendChild(displayElement)
}