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

const parent = document.querySelector(`.board__tasks`);

const fillCOntainerWithCards = () => {
  cardsFilling.map(elm => {
    let taskComponent = new Task(elm);
    let editTaskComponent = new TaskEdit(elm);
    taskComponent.render();

    taskComponent.onEdit = () => {
      editTaskComponent.render();
      parent.replaceChild(editTaskComponent.element, taskComponent.element);
      taskComponent.unrender();
    };

    editTaskComponent.onSubmit = () => {
      taskComponent.render();
      parent.replaceChild(taskComponent.element, editTaskComponent.element);
      editTaskComponent.unrender();
    };
  });
};
fillCOntainerWithCards();
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
      fillCOntainerWithCards();
    }
  });
});
