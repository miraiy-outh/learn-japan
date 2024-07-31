import { Cards } from "../../../components/cards/cards";
import MainMenu from "../../../components/main-menu/main-menu";
import { SubMenu } from "../../../components/sub-menu/sub-menu";
import { useDispatch } from "../../../hooks/redux-hooks";
import { WORDS_CHANGE_PAGE } from "../../../services/constants/words-constants";

export function Hiragana() {
  const dispatch = useDispatch();
  dispatch({
    type: WORDS_CHANGE_PAGE,
    page: "hiragana",
  });
  return (
    <div className="hiragana">
      <MainMenu />
      <SubMenu />
      <Cards type="hiragana" />
    </div>
  );
}
