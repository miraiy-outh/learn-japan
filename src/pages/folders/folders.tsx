import "./folders.scss";
import MainMenu from "../../components/main-menu/main-menu";
import { Folder } from "./folder/folder";
import { SubMenu } from "../../components/sub-menu/sub-menu";
import { useDispatch } from "../../hooks/redux-hooks";
import { WORDS_CHANGE_PAGE } from "../../services/constants/words-constants";

export function Folders() {
  const dispatch = useDispatch();
  dispatch({
    type: WORDS_CHANGE_PAGE,
    page: "folders",
  });
  return (
    <div className="folders">
      <MainMenu />
      <SubMenu />
      <div className="folders__container">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
    </div>
  );
}
