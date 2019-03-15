import { Component } from "./component.js";

class TaskEdit extends Component {
  constructor(data) {
    super();
    this._cardName = data.cardName;
    this._title = data.title;
    this._color = data.color;
    this._hashtag = data.hashtag;
    this._date = data.date;
    this._time = data.time;
    this._img = data.img;
    this._repeatingDays = data.repeatingDays;
    this._onSubmit = null;
  }
  _onSubmitButtonClick(event) {
    event.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }
  set onSubmit(f) {
    this._onSubmit = f;
  }

  get template() {
    const template = document
      .querySelector(`.card-on-edit`)
      .content.querySelector(`.card--edit`)
      .cloneNode(true);

    template.className = `card card--edit ${this._cardName}`;
    template.querySelector(`.card__text`).value = this._title;

    const container = document.createElement(`div`);
    container.appendChild(template);

    return container;
  }
  addEventListeners() {
    this._element
      .querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }
  removeEventListeners() {
    this._element
      .querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }
}

export { TaskEdit };
