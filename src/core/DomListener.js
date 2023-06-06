import { capitalizeFirstLetter } from '@core/functions';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided to DomListener');
    }
    this.root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMeethodName(capitalizeFirstLetter(listener));
      console.log(method);
      if (!this[method]) {
        throw new Error(`Method ${method} doesn't implemented in ${this[name]} component`);
      }
      this.root.addEventListener(listener, this[method].bind(this));
      console.log(listener, this.root);
    });
  }

  removeDomListeners() {}
}

function getMeethodName(method) {
  return 'on' + method;
}
