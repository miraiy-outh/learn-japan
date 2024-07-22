import "./folder.scss";
import { FolderMint } from "../../../components/forders/folder-mint";

export function Folder({ name }: { name: string }) {
  return (
    <div className="folder">
      <FolderMint />
      <div className="folder__name">{name}</div>
    </div>
  );
}
