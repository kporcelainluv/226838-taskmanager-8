import { cardsFilling, displayCard } from "./card.js";
import {
  createFiltersSection,
  filters,
  removeAllChildren,
  generateRandomNumber
} from "./filter.js";

createFiltersSection(filters);

cardsFilling.map(elm => displayCard(elm));

const arrayOfFilters = Array.from(
  document.querySelectorAll(`.main__filter label`)
);

arrayOfFilters.forEach(filt => {
  filt.addEventListener(`click`, () => {
    console.log("here");
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
