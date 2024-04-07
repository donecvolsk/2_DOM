/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/playing-field/image/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/gameStatistics/gameStatistics.js
class GameStatistics {
  constructor(elem) {
    this.elem = elem;
    this.hitStatistics = elem.querySelector(".gameStatistics .hit"); //поле попаданий
    this.missStatistics = elem.querySelector(".gameStatistics .miss"); // поле промахов
    this.cell = elem.querySelectorAll(".playing-field .playing-field_cell"); //коллекция ячеек на игровом поле
  }

  click() {
    this.hitStat = 0; //счетчик попаданий
    this.missStat = 0; //счетчик промахов

    this.cell.forEach(element => {
      element.addEventListener("click", () => {
        const icon = element.querySelector("img");
        if (icon) {
          this.hit();
          icon.remove();
        }
      });
    });
  }
  hit() {
    this.hitStat += 1;
    this.hitStatistics.textContent = this.hitStat;
  }
  miss() {
    this.missStat += 1;
    this.missStatistics.textContent = this.missStat;
  }
}
;// CONCATENATED MODULE: ./src/js/playing-field/playing-field.js


const gameStatistics = new GameStatistics(document.querySelector(".game-container"));
class PlayinField {
  constructor(area) {
    this.area = area;
  }
  start() {
    this.randomIconFromArea();
    gameStatistics.click();
  }
  randomIconFromArea() {
    const gnomImg = new Image();
    gnomImg.src = goblin_namespaceObject; //иконка с гномом

    const interval = setInterval(() => {
      for (const item of this.area) {
        if (item.firstChild) {
          item.firstChild.remove();
          gameStatistics.miss();
        }
        if (gameStatistics.missStat === 5) {
          clearInterval(interval);
          alert("Вы проиграли");
        }
      }
      const numberArea = Math.floor(Math.random() * this.area.length); //рандомное число для выбора ячеки по индексу
      this.area[numberArea].append(gnomImg);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_area = document.querySelectorAll(".playing-field_cell"); //коллекция ячеек на игровом поле
const playing = new PlayinField(app_area);
playing.start();
;// CONCATENATED MODULE: ./src/index.js





// TODO: write your code in app.js
/******/ })()
;