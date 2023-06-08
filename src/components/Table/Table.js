import { ExelComponent } from '@core/ExelComponent';
import { createTable } from '@/components/Table/table.template';
import { $ } from '@core/dom';

export class Table extends ExelComponent {
  static rootClassName = 'exel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }
  toHTML() {
    return createTable();
  }

  onClick() {}
  onMousedown(event) {
    console.log($.data(event.target, 'resize'));
  }
  onMousemove() {}
  onMouseup() {}
}
