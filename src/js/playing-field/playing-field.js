import icon from "./image/goblin.png";

export default class PlayinField {
  randomIconFromArea() {
    const gnomImg = new Image();
    gnomImg.src = icon;

    const area = document.querySelectorAll(".playing-field_cell");

    for (const item of area) {
      if (item.firstChild) {
        item.firstChild.remove();
      }
    }

    const numberArea = Math.floor(Math.random() * area.length);
    area[numberArea].append(gnomImg);
    //console.log(area[numberArea].innerHTML);
    //console.log(numberArea);
  }
}
