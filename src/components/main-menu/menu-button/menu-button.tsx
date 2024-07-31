import { useNavigate } from "react-router-dom";
import "./menu-button.scss";
import { useState } from "react";
import { MainSubMenu } from "./main-sub-menu-button/main-sub-menu-button";

export function MenuButton({ color, name }: { color: string; name: string }) {
  const navigate = useNavigate();
  const [isSubMenuOpened, setOpened] = useState(false);
  let classess = `button__menu button__${name}`;
  const handlePage = () => {
    if (name != "alphabet") {
      navigate(`/${name}`, { replace: true });
    } else {
      setOpened(!isSubMenuOpened);
    }
  };
  return (
    <div className="button__menu__container">
      <button
        className={classess}
        style={{ backgroundColor: color }}
        onClick={handlePage}
      >
        {name}
      </button>
      {isSubMenuOpened ? <MainSubMenu /> : <></>}
    </div>
  );
}
