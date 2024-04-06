import icon from "./image/goblin.png";
import GameStatistics from "../gameStatistics/gameStatistics";
const gameStatistics = new GameStatistics(
  document.querySelector(".game-container")
);

export default class PlayinField {
  constructor(area) {
    this.area = area;
  }
  start() {
    this.randomIconFromArea();
    gameStatistics.click();
  }

  randomIconFromArea() {
    const gnomImg = new Image();
    gnomImg.src = icon; //иконка с гномом

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
