import "./folder.scss";
import { FolderMint } from "../../../components/forder/folder-mint";

export function Folder() {
  return (
    <div className="folder">
      <FolderMint />
      <div className="folder__name">folder</div>
    </div>
  );
}
