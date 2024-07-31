import MainMenu from "../../components/main-menu/main-menu";
import { SubMenu } from "../../components/sub-menu/sub-menu";
import { useDispatch } from "../../hooks/redux-hooks";
import { WORDS_CHANGE_PAGE } from "../../services/constants/words-constants";

export function Grammar() {
  const dispatch = useDispatch();
  dispatch({
    type: WORDS_CHANGE_PAGE,
    page: "grammar",
  });
  return (
    <div className="grammar">
      <MainMenu />
      <SubMenu />
    </div>
  );
}
