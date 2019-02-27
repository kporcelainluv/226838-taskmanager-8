const cardsFilling = [
  {
    name: `card--black`,
    color: `black`,
    text: `This is example of new task, you can add picture, set date and time, add tags.`,
    hashtag: false,
    date: false,
    time: false,
    img: false
  },
  {
    name: `card--pink card--repeat`,
    color: `pink`,
    text: `It is example of repeating task. It marks by wave.`,
    hashtag: true,
    date: false,
    time: false,
    img: false
  },
  {
    name: `card--yellow card--deadline`,
    color: `red`,
    text: `This is card with missing deadline`,
    hashtag: true,
    date: false,
    time: false,
    img: false
  },
  {
    name: `card--yellow card--repeat`,
    color: `yellow`,
    text: `Here is a card with filled data`,
    hashtag: true,
    date: `23 SEPTEMBER`,
    time: `11:15 PM`,
    img: true
  },
  {
    name: `card--blue`,
    color: `blue`,
    text: ``,
    hashtag: true,
    date: false,
    time: false,
    img: false
  },
  {
    name: `card--blue`,
    color: `blue`,
    text: ``,
    hashtag: true,
    date: `23 SEPTEMBER`,
    time: `11:15 PM`,
    img: true
  }
];

const displayCard = ({ name, hashtag, text, date, time, img }) => {
  const template = document
    .querySelector(`.card_board_card`)
    .content.querySelector(`.card`)
    .cloneNode(true);
  template.className = `card ${name}`;
  template.querySelector(`.card__text`).value = text;
  if (!hashtag) {
    template
      .querySelector(`.card__details`)
      .removeChild(template.querySelector(`.card__hashtag`));
  }
  if (!date && !time) {
    template
      .querySelector(`.card__details`)
      .removeChild(template.querySelector(`.card__dates`));
  }
  if (!img) {
    template
      .querySelector(`.card__settings`)
      .removeChild(template.querySelector(`.card__img-wrap`));
  }

  const boardContainer = document.querySelector(`.board__tasks`);
  boardContainer.appendChild(template);
};

export { cardsFilling, displayCard };
