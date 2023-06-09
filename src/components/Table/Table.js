import { ExelComponent } from '@core/ExelComponent';
import { createTable } from '@/components/Table/table.template';
import { $ } from '@core/dom';

export class Table extends ExelComponent {
  static rootClassName = 'exel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
    this.resizeType = null;
  }
  toHTML() {
    return createTable();
  }

  resizeCol(event, cords, parent, cells) {
    const delta = event.pageX - cords.right;
    parent.style.width = cords.width + delta + 'px';
    cells.forEach(el => {
      el.style.width = cords.width + delta + 'px';
    });
  }

  resizeRow(event, cords, parent, cells) {
    const delta = event.pageY - cords.bottom;
    parent.style.height = cords.height + delta + 'px';
    cells.forEach(el => {
      el.style.height = cords.height + delta + 'px';
    });
  }

  onClick() {}
  onMousedown(event) {
    this.resizeType = $.data(event.target, 'resize');
    if (!this.resizeType) {
      return;
    }
    const resizer = event.target;
    const parent = resizer.closest('[data-type="resizable"]');
    if (!parent) {
      return;
    }
    const cellType = $.data(parent, this.resizeType === 'col' ? 'colType' : 'rowType');
    const cellsDataType = this.resizeType === 'col' ? 'data-column' : 'data-row';
    const cells = $.findAll(`[${cellsDataType}="${cellType}"]`, this.root);
    const cords = $.getCords(parent);
    document.onmousemove = e => {
      if (this.resizeType === 'col') {
        this.resizeCol(e, cords, parent, cells);
      } else {
        this.resizeRow(e, cords, parent, cells);
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }
  onMousemove(event) {
    console.log(event);
  }
  onMouseup() {}
}
