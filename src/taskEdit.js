import { Component } from "./component.js";
import { Color } from "./data.js";
class TaskEdit extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._color = data.color;
    this._hashtag = data.tags;
    this._img = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._onSubmit = null;

    this.isRepeated = false;
    this.isRepeated = false;

    this._onChangeDate = this._onChangeDate.bind(this);
    this._onChangeRepeated = this._onChangeRepeated.bind(this);
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
  }
  _processForm(formData) {
    const entry = {
      title: ``,
      color: ``,
      tags: new Set(),
      dueDate: new Date(),
      repeatingDays: {
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false
      }
    };
  }
  _onSubmitButtonClick(event) {
    event.preventDefault();
    const formData = new FormData(this._element.querySelector(`.card__form`));
    // const newData = this._processForm(formData);
    // typeof this._onSubmit === `function` && this._onSubmit(newData);
    console.log(formData);
    // this.update(newData);
  }
  static createMapper(target) {
    const entry = {
      title: ``,
      color: ``,
      tags: new Set(),
      dueDate: new Date(),
      repeatingDays: {
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false
      }
    };

    const taskEditMapper = TaskEdit.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      taskEditMapper[property] && taskEditMapper[property](value);
    }

    return entry;
  }

  set onSubmit(f) {
    this._onSubmit = f;
  }
  _isRepeated() {
    return Object.values(this._repeatingDays).some(it => it === true);
  }
  _onChangeDate() {
    this.isRepeated = !this.isRepeated;
    this.unrender();
    this.element = this.template();
    this.render();
  }

  _onChangeRepeated() {
    this.isRepeated = !this.isRepeated;
    this.unrender();
    this.element = this.template();
    this.re;
  }

  get template() {
    const template = document
      .querySelector(`.card-on-edit`)
      .content.querySelector(`.card--edit`)
      .cloneNode(true);

    template.className += ` ${Color[this._color]} ${
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
      const dateStatus = template.querySelector(`.card__date-status`);
      if (!this.isRepeated) {
        dateStatus.innerHTML = "YES";
      } else {
        dateStatus.innerHTML = "NO";
      }

      const repeatStatus = template.querySelector(`.card__repeat-status`);
      if (!this.isRepeated) {
        repeatStatus.innerHTML = "YES";
      } else {
        repeatStatus.innerHTML = "NO";
      }
      // write logic for datas if repeatStatus is true
      // write colors logic ??
    }

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
  update(data) {
    this._title = data.title;
    this._tags = data.tags;
    this._color = data.color;
    this._img = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._date = data.dueDate;
  }
}

export { TaskEdit };
