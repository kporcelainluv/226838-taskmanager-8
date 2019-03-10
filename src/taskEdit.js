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
  set onSubmit(f) {
    return (this._onSubmit = f);
  }
  get template() {
    const template = document
      .querySelector(`.card-on-edit`)
      .content.querySelector(`.card--edit`)
      .cloneNode(true);

    // template.className = `card ${this._cardName}`;
    // template.querySelector(`.card__text`).value = this._title;
    // if (!this._hashtag) {
    //   template
    //     .querySelector(`.card__details`)
    //     .removeChild(template.querySelector(`.card__hashtag`));
    // }
    // if (!this._date && !this._time) {
    //   template
    //     .querySelector(`.card__details`)
    //     .removeChild(template.querySelector(`.card__dates`));
    // }
    // if (!this._img) {
    //   template
    //     .querySelector(`.card__settings`)
    //     .removeChild(template.querySelector(`.card__img-wrap`));
    // }

    return template;
  }
  render() {
    const boardContainer = document.querySelector(`.board__tasks`);
    if (this._element) {
      boardContainer.removeChild(this._element);
      this._element = null;
    }
    this._element = this.template;
    boardContainer.appendChild(this._element);
  }
  unrender() {}
}

export { TaskEdit };
