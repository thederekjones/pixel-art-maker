// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const inputHeight = document.getElementById("inputHeight").value;
const inputWidth = document.getElementById("inputWidth").value;
const table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid() and
// prevent browser from resetting after choosing dimensions.
sizePicker.addEventListener("click", function (event) {
  event.preventDefault();
  let inputHeight = document.getElementById("inputHeight");
  let inputWidth = document.getElementById("inputWidth");
  makeGrid(inputHeight, inputWidth);
});

function makeGrid(inputHeight, inputWidth) {
  table.innerHTML = "";
  for (let i = 0; i < inputHeight.value; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < inputWidth.value; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", function (event) {
        if (event.target.style.backgroundColor)
          event.target.style.removeProperty("background-color");
        else event.target.style.backgroundColor = color.value;
      });
    }
  }
}
