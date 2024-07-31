import MainMenu from "../../components/main-menu/main-menu";
import { SubMenu } from "../../components/sub-menu/sub-menu";
import "./folder-page.scss";

export function FolderPage() {
  return (
    <div className="folder-page">
      <MainMenu />
      <SubMenu />
    </div>
  );
}
