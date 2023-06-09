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
};
