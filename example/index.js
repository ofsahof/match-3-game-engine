const Board = require("../dist/board").default;
const Rules = require("../dist/rules").default;

const board = new Board().init({
  x: 5,
  y: 5,
});

const rules = new Rules().init(board);

const boardElement = document.createElement("div");
boardElement.setAttribute("class", "board");

const appElement = document.querySelector(".app");
appElement.append(boardElement);

board.board.forEach((row) => {
  const rowElement = document.createElement("div");
  rowElement.setAttribute("class", "row");
  boardElement.append(rowElement);

  row.forEach((col) => {
    const colElement = document.createElement("div");
    colElement.setAttribute("class", "column");
    colElement.setAttribute("data-coord", col.id);

    const itemElement = document.createElement("div");
    itemElement.setAttribute("class", "item");
    itemElement.setAttribute("data-coord", col.id);
    itemElement.innerHTML = col.id;

    colElement.append(itemElement);
    
    rowElement.append(colElement);
  });
});


const colElements = document.querySelectorAll(".column");

for (colElement of colElements) {
  colElement.addEventListener("mouseover", (e) => {
    const coord = e.target.dataset.coord;
    const availableColumns = rules.getAvaiblableColumn(coord);

    availableColumns.forEach((coord) => {
      const availableColumn = document.querySelector(
        '.column[data-coord="' + coord + '"]'
      );

      availableColumn.classList.add("available");
    });
  });

  colElement.addEventListener("mouseout", () => {
    for (colElement of colElements) {
      colElement.classList.remove("available");
    }
  });
}
