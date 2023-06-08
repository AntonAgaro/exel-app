import { ExelComponent } from '@core/ExelComponent';
import { createTable } from '@/components/Table/table.template';

export class Table extends ExelComponent {
  static rootClassName = 'exel__table';
  toHTML() {
    return createTable();
  }
}
