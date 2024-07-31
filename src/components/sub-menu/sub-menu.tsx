import { useSelector } from "../../hooks/redux-hooks";
import { pageSelector } from "../../services/selectors/words-selectors";
import { BackButton } from "./back-button/back-button";
import { SubMenuButton } from "./sub-menu-button/sub-menu-button";
import "./sub-menu.scss";

export function SubMenu() {
  const currentPage = useSelector(pageSelector);
  return (
    <div className="sub-menu">
      <div className="sub-menu__back">
        {currentPage !== "" ? <BackButton /> : <></>}
      </div>
      <div className="sub-menu__container">
        {currentPage !== "katakana" &&
        currentPage !== "hiragana" &&
        currentPage !== "" ? (
          <SubMenuButton name="add" color="white" />
        ) : (
          <></>
        )}
        {currentPage !== "grammar" && currentPage !== "" ? (
          <SubMenuButton name="test" color="#a3ffcf" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
