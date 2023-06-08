export const $ = {
  findOne: tagname => {
    if (!tagname) {
      throw new Error('$.findOne expects string as argument');
    }
    return document.querySelector(tagname);
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
};
