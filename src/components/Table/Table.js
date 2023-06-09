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
    const widthValue = cords.width + delta + 'px';
    $.css(parent, { width: widthValue });
    cells.forEach(el => {
      $.css(el, { width: widthValue });
    });
  }

  resizeRow(event, cords, parent, cells) {
    const delta = event.pageY - cords.bottom;
    const heightValue = cords.height + delta + 'px';
    $.css(parent, { height: heightValue });
    cells.forEach(el => {
      $.css(el, { height: heightValue });
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
