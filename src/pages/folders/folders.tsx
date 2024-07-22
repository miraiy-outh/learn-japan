import "./folders.scss";
import MainMenu from "../../components/main-menu/main-menu";
import { Folder } from "./folder/folder";

export function Folders() {
  return (
    <div className="folders">
      <MainMenu />
      <div className="folders__container">
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
        <Folder name="folder" />
      </div>
    </div>
  );
}
