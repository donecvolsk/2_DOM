export default class GameStatistics {
  constructor(elem) {
    this.elem = elem;
    this.hitStatistics = elem.querySelector(".gameStatistics .hit"); //поле попаданий
    this.missStatistics = elem.querySelector(".gameStatistics .miss"); // поле промахов
    this.cell = elem.querySelectorAll(".playing-field .playing-field_cell"); //коллекция ячеек на игровом поле
  }

  click() {
    this.hitStat = 0; //счетчик попаданий
    this.missStat = 0; //счетчик промахов

    this.cell.forEach((element) => {
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
