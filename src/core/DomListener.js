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
      if (!this[method]) {
        throw new Error(`Method ${method} doesn't implemented in ${this['name']} component`);
      }
      this[method] = this[method].bind(this);
      this.root.addEventListener(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      this.root.removeEventListener(listener, this[getMeethodName(capitalizeFirstLetter(listener))]);
    });
  }
}

function getMeethodName(method) {
  return 'on' + method;
}
