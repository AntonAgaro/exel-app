import { ExelComponent } from '@core/ExelComponent';

export class Header extends ExelComponent {
  static rootClassName = 'exel__header';
  toHTML() {
    return `
              <input class="input" type="text" value="Новая таблица" />
          <div>
            <div class="button">
              <span class="material-symbols-outlined"> exit_to_app </span>
            </div>
            <div class="button">
              <span class="material-symbols-outlined"> delete </span>
            </div>
          </div>
    `;
  }
}
