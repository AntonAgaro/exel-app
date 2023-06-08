import { $ } from '@core/dom';

export class Exel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
    this.rootClassName = options.rootClassName || '';
  }

  getRoot() {
    const $root = $.create('div', this.rootClassName);
    this.components = this.components.map(Component => {
      const $componentWrapper = $.create('div', Component.rootClassName);
      const component = new Component($componentWrapper);
      $.html($componentWrapper, component.toHTML());
      $root.append($componentWrapper);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach(component => component.init());
  }
}
