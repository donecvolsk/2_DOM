import PlayinField from "./playing-field/playing-field";

const area = document.querySelectorAll(".playing-field_cell"); //коллекция ячеек на игровом поле
const playing = new PlayinField(area);
playing.start();
