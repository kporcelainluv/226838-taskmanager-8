let filters = [
  { name: "ALL", amount: 15, checked: true },
  { name: "OVERDUE", amount: 0, checked: false },
  { name: "TODAY", amount: 0, checked: false },
  { name: "FAVORITES", amount: 7, checked: false },
  { name: "REPEATING", amount: 2, checked: false },
  { name: "TAGS", amount: 6, checked: false },
  { name: "ARCHIVE", amount: 115, checked: false }
];

const createInput = ({ checked, name }) => {
  const input = document.createElement("input");
  input.className = "filter__input visually-hidden";
  input.id = `filter__${name.toLowerCase()}`;
  input.name = "filter";
  input.type = "radio";
  input.checked = checked;
  return input;
};

const createLabel = ({ name }) => {
  const label = document.createElement("label");
  label.htmlFor = `filter__${name.toLowerCase()}`;
  label.className = "filter__label";
  label.innerText = `${name}`;
  return label;
};

const createSpan = ({ name, amount }) => {
  const span = document.createElement("span");
  span.className = `filter__${name.toLowerCase()}-count`;
  span.innerText = ` ${amount}`;
  return span;
};

filters.reduce((section, filter) => {
  const span = createSpan(filter);
  const label = createLabel(filter);
  label.appendChild(span);
  const input = createInput(filter);
  section.appendChild(input);
  section.appendChild(label);

  return section;
}, document.querySelector(`.main__filter`));
