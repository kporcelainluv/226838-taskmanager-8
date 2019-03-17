import { cardsFilling, Color } from "./data.js";
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
  let taskComponent = new Task(cardsFilling);
  let editTaskComponent = new TaskEdit(cardsFilling);
  taskComponent.render();

  taskComponent.onEdit = () => {
    editTaskComponent.render();
    parent.replaceChild(editTaskComponent.element, taskComponent.element);
    taskComponent.unrender();
  };

  editTaskComponent.onSubmit = newObject => {
    console.log({ newObject });
    cardsFilling.title = newObject.title;
    cardsFilling.tags = newObject.tags;
    cardsFilling.color = newObject.color;
    cardsFilling.repeatingDays = newObject.repeatingDays;
    cardsFilling.dueDate = newObject.dueDate;

    taskComponent.update(cardsFilling);
    taskComponent.render();
    parent.replaceChild(taskComponent.element, editTaskComponent.element);
    editTaskComponent.unrender();
  };
};
fillCOntainerWithCards();
fillCOntainerWithCards();

const arrayOfFilters = Array.from(
  document.querySelectorAll(`.main__filter label`)
);

// arrayOfFilters.forEach(filt => {
//   filt.addEventListener(`click`, () => {
//     const filterID = filt.htmlFor;
//     if (document.querySelector(`#${filterID}`).disabled === false) {
//       const randomAmountOfCards = generateRandomNumber(1, 20);
//       const cardsContainer = document.querySelector(`.board__tasks`);
//       removeAllChildren(cardsContainer);
//       fillCOntainerWithCards();
//     }
//   });
// });
