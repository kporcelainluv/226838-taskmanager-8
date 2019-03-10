import { cardsFilling } from "./data.js";
import { Task } from "./task.js";
import { TaskEdit } from "./taskEdit.js";
import {
  createFiltersSection,
  filters,
  removeAllChildren,
  generateRandomNumber
} from "./filter.js";

createFiltersSection(filters);

// const mytask1 = new Task();

const editableCard = new TaskEdit(cardsFilling[0]);
editableCard.render();
const newCard = new Task(cardsFilling[0]);
const onEdit = () => {
  console.log("hello");
};

newCard.onEdit = onEdit;
newCard.render();

const newCard2 = new Task(cardsFilling[1]);
newCard2.render();

const arrayOfFilters = Array.from(
  document.querySelectorAll(`.main__filter label`)
);

arrayOfFilters.forEach(filt => {
  filt.addEventListener(`click`, () => {
    const filterID = filt.htmlFor;
    if (document.querySelector(`#${filterID}`).disabled === false) {
      const randomAmountOfCards = generateRandomNumber(1, 20);
      const cardsContainer = document.querySelector(`.board__tasks`);
      removeAllChildren(cardsContainer);
      for (let i = 0; i <= randomAmountOfCards; i++) {
        displayCard(cardsFilling[generateRandomNumber()]);
      }
    }
  });
});
