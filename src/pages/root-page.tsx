import { Route, Routes } from "react-router-dom";
import { Alphabet } from "./alphabet/alphabet";
import { Folders } from "./folders/folders";
import { Grammar } from "./grammar/grammar";
import { Katakana } from "./alphabet/katakana/katakana";
import { Hiragana } from "./alphabet/hiragana/hiragana";
import { FolderPage } from "./folder-page/folder-page";

export function RootPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Alphabet />} />
        <Route path="/katakana" element={<Katakana />} />
        <Route path="/hiragana" element={<Hiragana />} />
        <Route path="/words" element={<Folders />} />
        <Route path="/words/:id" element={<FolderPage />} />
        <Route path="/grammar" element={<Grammar />} />
      </Routes>
    </>
  );
}
