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

// start
const parent = document.querySelector(".board__tasks");
cardsFilling.map(elm => {
  let taskComponent = new Task(elm);
  let editTaskComponent = new TaskEdit(elm);
  taskComponent.render();

  taskComponent.onEdit = () => {
    editTaskComponent.render();
    parent.replaceChild(editTaskComponent.element, taskComponent.element);
    taskComponent.unrender();
  };
  //may be wrong
  editTaskComponent.onSubmit = () => {
    taskComponent.render();
    parent.replaceChild(taskComponent.element, editTaskComponent.element);
    editTaskComponent.unrender();
  };
});

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
