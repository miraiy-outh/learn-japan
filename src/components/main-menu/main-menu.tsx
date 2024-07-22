import { MenuButton } from "./menu-button/menu-button";
import "./main-menu.scss";
export default function MainMenu() {
  return (
    <div className="main-menu">
      <MenuButton color="#FFACA2" name="alphabet" />
      <MenuButton color="#41D0FF" name="words" />
      <MenuButton color="#D8FC3F" name="grammar" />
    </div>
  );
}
