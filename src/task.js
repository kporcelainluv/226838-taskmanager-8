import { Component } from "./component.js";
import { Color } from "./data.js";
class Task extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._color = data.color;
    this._hashtag = data.tags;
    this._date = data.dueDate;
    this._img = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._onEdit = null;
  }
  _isRepeated() {
    return Object.values(this._repeatingDays).some(it => it === true);
  }
  _onEditButtonClick(event) {
    event.preventDefault();
    if (typeof this._onEdit === `function`) {
      this._onEdit();
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
    template.className = `card ${Color[this._color]} ${
      this._isRepeated() ? `card--repeat` : ``
    }`;
    template.querySelector(`.card__text`).value = this._title;
    if (!this._hashtag) {
      template
        .querySelector(`.card__details`)
        .removeChild(template.querySelector(`.card__hashtag`));
    } else {
      this._hashtag.forEach(tagName => {
        const hashtagList = template.querySelector(`.card__hashtag-list`);
        const span = document.createElement("span");
        span.className = "card__hashtag-inner";
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "hashtag";
        input.value = "repeat";
        input.className = "card__hashtag-hidden-input";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "card__hashtag-name";
        button.innerHTML = `#${tagName}`;
        const buttonDelete = document.createElement("button");
        buttonDelete.type = "button";
        buttonDelete.className = "card__hashtag-delete";
        buttonDelete.innerHTML = "delete";

        span.appendChild(input);
        span.appendChild(button);
        span.appendChild(buttonDelete);
        hashtagList.appendChild(span);
      });
    }
    if (!this._img) {
      template
        .querySelector(`.card__settings`)
        .removeChild(template.querySelector(`.card__img-wrap`));
    } else {
      const image = template.querySelector(".card__img");
      image.src = this._img;
    }
    const container = document.createElement(`div`);
    container.appendChild(template);

    return container;
  }
  addEventListeners() {
    this._element
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }
  removeEventListeners() {
    this._element
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }
  update(data) {
    this._title = data.title;
    this._color = data.color;
    this._hashtag = data.tags;
    this._img = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._dueDate = data.dueDate;
  }
}

export { Task };
