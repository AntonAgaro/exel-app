import { DomListener } from '@core/DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  // Выводит шаблон компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }
}
