import { Cards } from "../../../components/cards/cards";
import MainMenu from "../../../components/main-menu/main-menu";
import { SubMenu } from "../../../components/sub-menu/sub-menu";
import { useDispatch } from "../../../hooks/redux-hooks";
import { WORDS_CHANGE_PAGE } from "../../../services/constants/words-constants";

export function Katakana() {
  const dispatch = useDispatch();
  dispatch({
    type: WORDS_CHANGE_PAGE,
    page: "katakana",
  });
  return (
    <div className="katakana">
      <MainMenu />
      <SubMenu />
      <Cards type="katakana" />
    </div>
  );
}
