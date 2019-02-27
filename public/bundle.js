/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! exports provided: cardsFilling, displayCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardsFilling", function() { return cardsFilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayCard", function() { return displayCard; });
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

cardsFilling.map(elm => displayCard(elm));



/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: createFiltersSection, filters, removeAllChildren, generateRandomNumber, arrayOfFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFiltersSection", function() { return createFiltersSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllChildren", function() { return removeAllChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfFilters", function() { return arrayOfFilters; });
let filters = [
  { name: `ALL`, amount: 15, checked: true, disabled: false },
  { name: `OVERDUE`, amount: 0, checked: false, disabled: true },
  { name: `TODAY`, amount: 0, checked: false, disabled: true },
  { name: `FAVORITES`, amount: 7, checked: false, disabled: false },
  { name: `REPEATING`, amount: 2, checked: false, disabled: false },
  { name: `TAGS`, amount: 6, checked: false, disabled: false },
  { name: `ARCHIVE`, amount: 115, checked: false, disabled: false }
];
const createFiltersSection = filters => {
  const createInput = ({ disabled, checked, name }) => {
    const input = document.createElement(`input`);
    input.className = `filter__input visually-hidden`;
    input.id = `filter__${name.toLowerCase()}`;
    input.name = `filter`;
    input.type = `radio`;
    input.checked = checked;
    input.disabled = disabled;
    return input;
  };

  const createLabel = ({ name }) => {
    const label = document.createElement(`label`);
    label.htmlFor = `filter__${name.toLowerCase()}`;
    label.className = `filter__label`;
    label.innerText = `${name}`;
    return label;
  };

  const createSpan = ({ name, amount }) => {
    const span = document.createElement(`span`);
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
};

// adding event listener on clicks

const removeAllChildren = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function generateRandomNumber(min = 0, max = 6) {
  return Math.floor(Math.random() * (max - min) + min);
}

const arrayOfFilters = Array.from(
  document.querySelectorAll(`.main__filter label`)
);




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ "./src/filter.js");


Object(_filter_js__WEBPACK_IMPORTED_MODULE_1__["createFiltersSection"])(_filter_js__WEBPACK_IMPORTED_MODULE_1__["filters"]);
_card_js__WEBPACK_IMPORTED_MODULE_0__["cardsFilling"].map(elm => Object(_card_js__WEBPACK_IMPORTED_MODULE_0__["displayCard"])(elm));

// arrayOfFilters.forEach(filt => {
//   filt.addEventListener(`click`, () => {
//     const filterID = filt.htmlFor;
//     if (document.querySelector(`#${filterID}`).disabled === false) {
//       const randomAmountOfCards = generateRandomNumber(1, 20);
//       const cardsContainer = document.querySelector(`.board__tasks`);
//       removeAllChildren(cardsContainer);
//       for (let i = 0; i <= randomAmountOfCards; i++) {
//         const randomIndex = generateRandomNumber();
//         displayCard(cardsFilling[randomIndex]);
//       }
//     }
//   });
// });


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map