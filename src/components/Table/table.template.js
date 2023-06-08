const LETTERS_CODES = {
  A: 65,
  Z: 90,
};

const createCell = () => {
  return `
     <div class="cell" contenteditable></div>
  `;
};

const createCol = (content = '') => {
  return `
     <div class="column">${content}</div>
  `;
};

const createRow = (content = '', cellNumber = '') => {
  return `
    <div class="row">
      <div class="row-info">${cellNumber}</div>
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
    for (let i = LETTERS_CODES.A; i <= LETTERS_CODES.Z; i++) {
      cellHTML += createCell();
    }
    rows.push(createRow(cellHTML, String(i + 1)));
  }
  return rows.join('');
};
