import { Component } from "./component.js";

class Task extends Component {
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
    this._onEdit = null;
  }
  _onEditButtonClick(event) {
    event.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }
  set onEdit(fn) {
    this._onEdit = fn;
  }
  get template() {
    const template = document
      .querySelector(`.card_board_card`)
      .content.querySelector(`.card`)
      .cloneNode(true);
    template.className = `card ${this._cardName}`;
    template.querySelector(`.card__text`).value = this._title;
    if (!this._hashtag) {
      template
        .querySelector(`.card__details`)
        .removeChild(template.querySelector(`.card__hashtag`));
    }
    if (!this._date && !this._time) {
      template
        .querySelector(`.card__details`)
        .removeChild(template.querySelector(`.card__dates`));
    }
    if (!this._img) {
      template
        .querySelector(`.card__settings`)
        .removeChild(template.querySelector(`.card__img-wrap`));
    }
    const container = document.createElement(`div`);
    container.appendChild(template);

    return container;
  }
  render() {
    const boardContainer = document.querySelector(`.board__tasks`);
    this._element = this.template;
    boardContainer.appendChild(this._element);

    this._element
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  unrender() {
    this._element
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
    this._element = null;
  }
}

export { Task };
