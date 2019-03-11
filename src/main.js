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
const parent = document.querySelector(".board__tasks");
// start

const taskComponent = new Task(cardsFilling[0]);
const editTaskComponent = new TaskEdit(cardsFilling[0]);
taskComponent.render();

taskComponent.onEdit = () => {
  editTaskComponent.render();
  parent.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

taskComponent.onSubmit = () => {
  editTaskComponent.render();
  parent.replaceChild(editTaskComponent.element, taskComponent2.element);
  taskComponent2.unrender();
};

// end

// const taskComponent2 = new TaskEdit(cardsFilling[1]);
// taskComponent2.onSubmit = () => {
//   const editTaskComponent = new Task(cardsFilling[1]);
//   editTaskComponent.render();
//   parent.replaceChild(editTaskComponent.element, taskComponent2.element);
//   taskComponent2.unrender();
// };
// taskComponent2.render();

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
