import { MenuButton } from "../menu-button";
import "./main-sub-menu-button.scss";
export function MainSubMenu() {
  return (
    <div className="button__main-sub-menu">
      <MenuButton color="white" name="katakana" />
      <MenuButton color="white" name="hiragana" />
    </div>
  );
}
