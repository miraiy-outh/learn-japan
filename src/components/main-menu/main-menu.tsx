import { MenuButton } from "./menu-button/menu-button";
import "./main-menu.scss";
export default function MainMenu() {
  return (
    <div className="main-menu">
      <MenuButton color="#F8B8FF" name="alphabet" />
      <MenuButton color="#97D575" name="words" />
      <MenuButton color="#F9FF8C" name="grammar" />
    </div>
  );
}
