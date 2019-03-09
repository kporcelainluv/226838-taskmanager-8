const cardsFilling = [
  {
    cardName: `card--black`,
    color: `black`,
    title: ` wow congrats This is example of new task, you can add picture, set date and time, add tags.`,
    hashtag: false,
    date: false,
    time: false,
    img: false
  },
  {
    cardName: `card--pink card--repeat`,
    color: `pink`,
    title: `It is example of repeating task. It marks by wave.`,
    hashtag: true,
    date: false,
    time: false,
    img: false
  },
  {
    cardName: `card--yellow card--deadline`,
    color: `red`,
    title: `This is card with missing deadline`,
    hashtag: true,
    date: false,
    time: false,
    img: false
  },
  {
    cardName: `card--yellow card--repeat`,
    color: `yellow`,
    title: `Here is a card with filled data`,
    hashtag: true,
    date: `23 SEPTEMBER`,
    time: `11:15 PM`,
    img: true
  },
  {
    cardName: `card--blue`,
    color: `blue`,
    title: ``,
    hashtag: true,
    date: false,
    time: false,
    img: false
  },
  {
    cardName: `card--blue`,
    color: `blue`,
    title: ``,
    hashtag: true,
    date: `23 SEPTEMBER`,
    time: `11:15 PM`,
    img: true
  }
];
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
    this._element = this.template;
    const boardContainer = document.querySelector(`.board__tasks`);
    boardContainer.appendChild(this._element);
  }
  unrender() {}
}
// const displayCard = ({ name, hashtag, title, date, time, img }) => {
//   const template = document
//     .querySelector(`.card_board_card`)
//     .content.querySelector(`.card`)
//     .cloneNode(true);
//   template.className = `card ${name}`;
//   template.querySelector(`.card__text`).value = title;
//   if (!hashtag) {
//     template
//       .querySelector(`.card__details`)
//       .removeChild(template.querySelector(`.card__hashtag`));
//   }
//   if (!date && !time) {
//     template
//       .querySelector(`.card__details`)
//       .removeChild(template.querySelector(`.card__dates`));
//   }
//   if (!img) {
//     template
//       .querySelector(`.card__settings`)
//       .removeChild(template.querySelector(`.card__img-wrap`));
//   }

//   const boardContainer = document.querySelector(`.board__tasks`);
//   boardContainer.appendChild(template);
// };

class Task {
  constructor(data) {
    this._data = data;
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

    return template;
  }
  render() {
    this._element = this.template;
    const boardContainer = document.querySelector(`.board__tasks`);
    boardContainer.appendChild(this._element);

    const editButton = this._element
      .querySelector(`.card__btn--edit`)
      .addEventListener("click", () => {
        console.log("press");
      });
  }
  unrender() {}
}
const newCard = new Task(cardsFilling[0]);
newCard.render();

const EditNewCard = new TaskEdit(cardsFilling[0]);
EditNewCard.render();
export { cardsFilling, Task, TaskEdit };
