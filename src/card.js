const getDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
const cardsFilling = [
  {
    title: ["Изучить теорию", "Сделать домашку", "Пройти интенсив на соточку"],
    dueDate: getDate(new Date(2019, 0, 3), new Date()),
    hashtags: new Set(["homework", "theory", "practice", "intensive", "keks"]),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: ["black", "yellow", "blue", "green", "pink"],
    repeatingDays: {
      Mo: true,
      Tu: true,
      We: false,
      Th: false,
      Fr: true,
      Sa: false,
      Su: false
    },
    isFavorite: false,
    isDone: false
  },
  {
    title: ["Изучить теорию", "Сделать домашку", "Пройти интенсив на соточку"],
    dueDate: getDate(new Date(2019, 0, 3), new Date()),
    hashtags: new Set(["homework", "theory", "practice", "intensive", "keks"]),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: ["black", "yellow", "blue", "green", "pink"],
    repeatingDays: {
      Mo: true,
      Tu: false,
      We: false,
      Th: false,
      Fr: true,
      Sa: true,
      Su: false
    },
    isFavorite: true,
    isDone: true
  },
  {
    title: ["Изучить теорию", "Сделать домашку", "Пройти интенсив на соточку"],
    dueDate: getDate(new Date(2019, 0, 3), new Date()),
    hashtags: new Set(["homework", "theory", "practice", "intensive", "keks"]),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: ["black", "yellow", "blue", "green", "pink"],
    repeatingDays: {
      Mo: true,
      Tu: true,
      We: false,
      Th: false,
      Fr: true,
      Sa: false,
      Su: true
    },
    isFavorite: false,
    isDone: false
  },
  {
    title: ["Изучить теорию", "Сделать домашку", "Пройти интенсив на соточку"],
    dueDate: getDate(new Date(2019, 0, 3), new Date()),
    hashtags: new Set(["homework", "theory", "practice", "intensive", "keks"]),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: ["black", "yellow", "blue", "green", "pink"],
    repeatingDays: {
      Mo: true,
      Tu: true,
      We: false,
      Th: false,
      Fr: true,
      Sa: false,
      Su: false
    },
    isFavorite: false,
    isDone: false
  },
  {
    title: ["Изучить теорию", "Сделать домашку", "Пройти интенсив на соточку"],
    dueDate: getDate(new Date(2019, 0, 3), new Date()),
    hashtags: new Set(["homework", "theory", "practice", "intensive", "keks"]),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: ["black", "yellow", "blue", "green", "pink"],
    repeatingDays: {
      Mo: true,
      Tu: true,
      We: false,
      Th: false,
      Fr: true,
      Sa: false,
      Su: false
    },
    isFavorite: false,
    isDone: true
  },
  {
    title: ["Изучить теорию", "Сделать домашку", "Пройти интенсив на соточку"],
    dueDate: getDate(new Date(2019, 0, 3), new Date()),
    hashtags: new Set(["homework", "theory", "practice", "intensive", "keks"]),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: ["black", "yellow", "blue", "green", "pink"],
    repeatingDays: {
      Mo: true,
      Tu: true,
      We: false,
      Th: false,
      Fr: true,
      Sa: false,
      Su: false
    },
    isFavorite: false,
    isDone: false
  }
];

const getRandomNum = arr => {
  return Math.floor(Math.random() * arr.length);
};

const displayCard = ({
  title,
  dueDate,
  hashtags,
  picture,
  color,
  repeatingDays,
  isFavorite,
  isDone
}) => {
  const template = document
    .querySelector(`.card_board_card`)
    .content.querySelector(`.card`)
    .cloneNode(true);
  // add color
  template.className = `card card--${color[getRandomNum(color)]}`;
  // add description
  template.querySelector(`.card__text`).value = title[getRandomNum(title)];
  // add hashtags
  if (hashtags) {
    const createHashtags = hashText => {
      const hashtagsList = template.querySelector(`.card__hashtag-list`);
      const span = document.createElement("span");
      span.className = "card__hashtag-inner";
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "hashtag";
      input.value = "repeat";
      input.class = "card__hashtag-hidden-input";
      span.appendChild(input);
      const button = document.createElement("button");
      button.type = button;
      button.className = "card__hashtag-name";
      button.innerHTML = `#${hashText}`;
      const buttonDelete = document.createElement("button");
      buttonDelete.className = "card__hashtag-delete";
      buttonDelete.type = button;
      span.appendChild(buttonDelete);
      span.appendChild(button);
      hashtagsList.appendChild(span);
    };
    const arrayOfCurrentHashes = [];
    hashtags = Array.from(hashtags);
    for (let i = 0; i <= getRandomNum([0, 0, 0]); i++) {
      arrayOfCurrentHashes.push(hashtags[getRandomNum(hashtags)]);
    }
    arrayOfCurrentHashes.map(elm => createHashtags(elm));
  }
  // add image
  if (picture) {
    template.querySelector(`.card__img`).src = picture;
  }
  // add due date
  if (dueDate) {
    let month = dueDate.getUTCMonth();
    if (month === 0) {
      month = "January";
    }
    if (month === 1) {
      month = "February";
    }
    if (month === 2) {
      month = "March";
    }
    template.querySelector(
      `.card__date`
    ).value = `${month} ${dueDate.getUTCDate()}`;
    template.querySelector(
      `.card__time`
    ).value = `${dueDate.getHours()}:${dueDate.getMinutes()}`;
  }
  // check if tast is repeating
  if (repeatingDays) {
    template.className += ` card--repeat`;
  }
  // add to template
  const boardContainer = document.querySelector(`.board__tasks`);
  boardContainer.appendChild(template);
};

export { cardsFilling, displayCard };
