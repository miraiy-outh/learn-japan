import { RootState } from "../store";

export function foldersSelector(state: RootState) {
  return state.wordsData.folders;
}

export function wordsSelector(state: RootState) {
  return state.wordsData.words;
}

export function pageSelector(state: RootState) {
  return state.wordsData.currentPage;
}
