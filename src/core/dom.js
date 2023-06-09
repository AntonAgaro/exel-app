export const $ = {
  findOne: selector => {
    if (!selector) {
      throw new Error('$.findOne expects string as argument');
    }
    return document.querySelector(selector);
  },
  findAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  },
  create(tagname, classes = '') {
    const $el = document.createElement(tagname);
    if (classes) {
      $el.classList.add(classes);
    }
    return $el;
  },
  html(el, html) {
    if (!html) {
      throw new Error('$.html expects string as html');
    }
    const $element = typeof el === 'string' ? this.findOne(el) : el;
    $element.insertAdjacentHTML('afterbegin', html);
  },

  data(el, attr) {
    if (!el || !attr) {
      return;
    }
    return el.dataset[attr];
  },

  getCords(el) {
    return el.getBoundingClientRect();
  },

  css(el, styles) {
    if (!el || !styles) {
      return false;
    }
    if (typeof styles === 'string') {
      el.style.cssText += styles;
      return true;
    }
    if (typeof styles === 'object') {
      Object.keys(styles).forEach(style => {
        el.style[style] = styles[style];
      });
      return true;
    }
  },
};
