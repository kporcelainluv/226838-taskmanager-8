import { Component } from "./component.js";
import { Color } from "./data.js";
class TaskEdit extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._color = data.color;
    this._tags = data.tags;
    this._img = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._onSubmit = null;
    this._state = {};
    this._dueDate = data.dueDate;

    this._state.isDate = false;
    this._state.isRepeated = false;
    this._onChangeDate = this._onChangeDate.bind(this);
    this._onChangeRepeated = this._onChangeRepeated.bind(this);
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some(it => it === true);
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
    const taskEditMapper = TaskEdit.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      taskEditMapper[property] && taskEditMapper[property](value);
    }

    return entry;
  }
  _onSubmitButtonClick(event) {
    event.preventDefault();

    const formData = new FormData(this._element.querySelector(`.card__form`));
    const newData = this._processForm(formData);
    typeof this._onSubmit === `function` && this._onSubmit(newData);

    this.update(newData);
  }
  set onSubmit(f) {
    this._onSubmit = f;
  }
  _onChangeDate() {
    this._state.isDate = !this._state.isDate;
    console.log("date state", this._state.isDate);
    this.removeEventListeners();
    this._partialUpdate();
    this.addEventListeners();
  }

  _onChangeRepeated() {
    this._state.isRepeated = !this._state.isRepeated;
    this.removeEventListeners();
    this._partialUpdate();
    this.addEventListeners();
  }
  _partialUpdate() {
    this._element.parentNode.replaceChild(this.template, this._element);
  }

  get template() {
    const template = document
      .querySelector(`.card-on-edit`)
      .content.querySelector(`.card--edit`)
      .cloneNode(true);

    template.className += ` ${Color[this._color]} ${
      this._state.isRepeated ? `card--repeat` : ``
    }`;
    template.querySelector(`.card__text`).value = this._title;

    this._tags.forEach(tagName => {
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
    const toggleDate = template.querySelector(`.card__date-status`);
    toggleDate.innerHTML = this._state.isDate ? "YES" : "NO";
    template.querySelector(`.card__date-deadline`).disabled = !this._state
      .isDate;
    const toggleRepeatStatus = template.querySelector(`.card__repeat-status`);
    toggleRepeatStatus.innerHTML = this._state.isRepeated ? "YES" : "NO";
    template.querySelector(`.card__repeat-days`).disabled = !this._state
      .isRepeated;

    const container = document.createElement(`div`);
    container.appendChild(template);

    return container;
  }
  addEventListeners() {
    console.log("add");
    this._element
      .querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick);
    this._element
      .querySelector(`.card__date-deadline-toggle`)
      .addEventListener(`click`, this._onChangeDate);
    this._element
      .querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, this._onChangeRepeated);
  }
  removeEventListeners() {
    console.log("remove");
    this._element
      .querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick);
    this._element
      .querySelector(`.card__date-deadline-toggle`)
      .removeEventListener(`click`, this._onChangeDate);
    this._element
      .querySelector(`.card__repeat-toggle`)
      .removeEventListener(`click`, this._onChangeRepeated);
  }
  update(data) {
    this._title = data.title;
    this._color = data.color;
    this._tags = data.tags;
    this._img = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._dueDate = data.dueDate;
  }
  static createMapper(target) {
    return {
      hashtag: value => target.tags.add(value),
      text: value => (target.title = value),
      color: value => (target.color = value),
      repeat: value => (target.repeatingDays[value] = true),
      date: value => target.dueDate[value]
    };
  }
}

export { TaskEdit };
