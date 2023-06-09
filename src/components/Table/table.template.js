const LETTERS_CODES = {
  A: 65,
  Z: 90,
};

const createCell = (column = '', row = '') => {
  return `
     <div class="cell" contenteditable data-column="${column}" data-row="${row}"></div>
  `;
};

const createCol = (content = '') => {
  return `
     <div class="column" data-type="resizable" data-col-type="${content}">
        ${content}
        <div class="col-resize" data-resize="col"></div>
     </div>
  `;
};

const createRow = (content = '', cellNumber = '') => {
  const resize = cellNumber ? `<div class="row-resize" data-resize="row"></div>` : '';
  return `
    <div class="row" data-type="resizable" data-row-type="${cellNumber}">
      <div class="row-info">
        ${cellNumber}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
};
export const createTable = (rowsCount = 15) => {
  const rows = [];
  const cols = [];

  for (let i = LETTERS_CODES.A; i <= LETTERS_CODES.Z; i++) {
    cols.push(createCol(String.fromCharCode(i)));
  }

  rows.push(createRow(cols.join('')));

  for (let i = 0; i < rowsCount; i++) {
    let cellHTML = '';
    for (let j = LETTERS_CODES.A; j <= LETTERS_CODES.Z; j++) {
      cellHTML += createCell(String.fromCharCode(j), String(i + 1));
    }
    rows.push(createRow(cellHTML, String(i + 1)));
  }
  return rows.join('');
};
