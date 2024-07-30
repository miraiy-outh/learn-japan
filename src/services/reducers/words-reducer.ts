import { generateUUID } from "../../utils/generate-id";
import {
  WORDS_ADD_FOLDER,
  WORDS_ADD_WORD,
  WORDS_CHANGE_FOLDER,
  WORDS_CHANGE_WORD,
  WORDS_CHANGE_WORD_FOLDER,
  WORDS_DELETE_FOLDER,
  WORDS_DELETE_WORD,
  WORDS_INIT,
} from "../constants/words-constants";

type TWord = {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  folderId: string;
};

type TFolder = {
  id: string;
  name: string;
};

type TWordsState = {
  words: TWord[];
  folders: TFolder[];
};

type TWordsInitAction = {
  type: typeof WORDS_INIT;
  words: TWord[];
  folders: TFolder[];
};

type TWordsAddFolderAction = {
  type: typeof WORDS_ADD_FOLDER;
  name: string;
};

type TWordsChangeFolderAction = {
  type: typeof WORDS_CHANGE_FOLDER;
  id: string;
  name: string;
};

type TWordsDeleteFolderAction = {
  type: typeof WORDS_DELETE_FOLDER;
  id: string;
};

type TWordsAddWordAction = {
  type: typeof WORDS_ADD_WORD;
  word: string;
  transcription: string;
  translation: string;
  folderId: string;
};

type TWordsChangeWordAction = {
  type: typeof WORDS_CHANGE_WORD;
  id: string;
  word: string;
  transcription: string;
  translation: string;
};

type TWordsDeleteWordAction = {
  type: typeof WORDS_DELETE_WORD;
  id: string;
};

type TWordsChangeWordFolderAction = {
  type: typeof WORDS_CHANGE_WORD_FOLDER;
  id: string;
  folderId: string;
};

export type TWordsActions =
  | TWordsInitAction
  | TWordsAddFolderAction
  | TWordsChangeFolderAction
  | TWordsDeleteFolderAction
  | TWordsAddWordAction
  | TWordsChangeWordAction
  | TWordsDeleteWordAction
  | TWordsChangeWordFolderAction;

const defaultState: TWordsState = {
  words: [],
  folders: [],
};

export function wordsReducer(
  state = defaultState,
  action: TWordsActions
): TWordsState {
  switch (action.type) {
    case WORDS_INIT: {
      const words = action.words;
      const folders = action.folders;
      return {
        ...state,
        words,
        folders,
      };
    }
    case WORDS_ADD_FOLDER: {
      const name = action.name;
      const id = generateUUID();
      const newFolders = state.folders;
      newFolders.push({ id, name });
      return {
        ...state,
        folders: newFolders,
      };
    }

    case WORDS_CHANGE_FOLDER: {
      const name = action.name;
      const id = action.id;
      let newFolders = state.folders.map((folder) => {
        if (folder.id === id) {
          folder.name = name;
        }
        return folder;
      });
      return {
        ...state,
        folders: newFolders,
      };
    }

    case WORDS_DELETE_FOLDER: {
      const id = action.id;
      const newFolders = state.folders.filter((folder) => folder.id !== id);
      return {
        ...state,
        folders: newFolders,
      };
    }

    default:
      return state;
  }
}
