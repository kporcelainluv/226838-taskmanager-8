const cardsFilling = {
  title: [`Prepare for the pitch`, `find money for travel`, `eat something`][
    Math.floor(Math.random() * 3)
    // Math.floor(Math.random() * (3 - 1)) + 1
  ],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([`cinema`, `entertainment`, `myself`, `cinema`]),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  repeatingDays: {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false
  },
  color: [`black`, `yellow`, `blue`, `pink`, `green`][
    Math.floor(Math.random() * 6)
  ]
};

const Color = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`
};
export { cardsFilling, Color };
