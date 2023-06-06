import { ExelComponent } from '@core/ExelComponent';

export class Toolbar extends ExelComponent {
  static rootClassName = 'exel__toolbar';
  toHTML() {
    return `
    <div class="button">
            <span class="material-symbols-outlined"> format_align_left </span>
          </div>
          <div class="button">
            <span class="material-symbols-outlined"> format_align_center </span>
          </div>
          <div class="button">
            <span class="material-symbols-outlined"> format_align_right </span>
          </div>
          <div class="button">
            <span class="material-symbols-outlined"> format_bold </span>
          </div>
          <div class="button">
            <span class="material-symbols-outlined"> format_italic </span>
          </div>
          <div class="button">
            <span class="material-symbols-outlined"> format_underlined </span>
          </div>
    `;
  }
}
