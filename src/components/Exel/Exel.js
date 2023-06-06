export class Exel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
    this.rootClassName = options.rootClassName || '';
  }

  getRoot() {
    const $root = document.createElement('div');
    $root.className = this.rootClassName;
    this.components.forEach(Component => {
      const $componentWrapper = document.createElement('div');
      $componentWrapper.className = Component.rootClassName;
      const component = new Component($componentWrapper);
      $componentWrapper.insertAdjacentHTML('afterbegin', component.toHTML());
      $root.append($componentWrapper);
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
