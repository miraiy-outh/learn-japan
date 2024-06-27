import { MenuButton } from "../menu-button";
import "./submenu.scss";
export function Submenu() {
  return (
    <div className="submenu">
      <MenuButton color="white" name="katakana" />
      <MenuButton color="white" name="hiragana" />
    </div>
  );
}
