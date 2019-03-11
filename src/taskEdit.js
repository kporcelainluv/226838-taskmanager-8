class TaskEdit {
  constructor(data) {
    this._cardName = data.cardName;
    this._title = data.title;
    this._color = data.color;
    this._hashtag = data.hashtag;
    this._date = data.date;
    this._time = data.time;
    this._img = data.img;
    this._repeatingDays = data.repeatingDays;
    this._element = null;
    this._state = {
      isEdit: false
    };
    this._onSubmit = null;
  }
  _onSubmitButtonClick(event) {
    event.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }
  get element() {
    return this._element;
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
  render() {
    const boardContainer = document.querySelector(`.board__tasks`);
    this._element = this.template;
    boardContainer.appendChild(this._element);

    this._element
      .querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }
  unrender() {
    this._element
      .querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick.bind(this));
    this._element = null;
  }
}

export { TaskEdit };
