type TLetter = {
  consonant: string;
  katakana: string;
  vowel: string;
  romaji: string;
  hiragana: string;
};

type TAlphabet = Record<string, TLetter>;

export const letters: TAlphabet = {
  a: {
    consonant: "vowel",
    katakana: "ア",
    vowel: "a",
    romaji: "a",
    hiragana: "あ",
  },
  i: {
    consonant: "vowel",
    katakana: "イ",
    vowel: "i",
    romaji: "i",
    hiragana: "い",
  },
  u: {
    consonant: "vowel",
    katakana: "ウ",
    vowel: "u",
    romaji: "u",
    hiragana: "う",
  },
  e: {
    consonant: "vowel",
    katakana: "エ",
    vowel: "e",
    romaji: "e",
    hiragana: "え",
  },
  o: {
    consonant: "vowel",
    katakana: "オ",
    vowel: "o",
    romaji: "o",
    hiragana: "お",
  },
  ka: {
    consonant: "k",
    katakana: "カ",
    vowel: "a",
    romaji: "ka",
    hiragana: "か",
  },
  ki: {
    consonant: "k",
    katakana: "キ",
    vowel: "i",
    romaji: "ki",
    hiragana: "き",
  },
  ku: {
    consonant: "k",
    katakana: "ク",
    vowel: "u",
    romaji: "ku",
    hiragana: "く",
  },
  ke: {
    consonant: "k",
    katakana: "ケ",
    vowel: "e",
    romaji: "ke",
    hiragana: "け",
  },
  ko: {
    consonant: "k",
    katakana: "コ",
    vowel: "o",
    romaji: "ko",
    hiragana: "こ",
  },
  sa: {
    consonant: "s",
    katakana: "サ",
    vowel: "a",
    romaji: "sa",
    hiragana: "さ",
  },
  shi: {
    consonant: "s",
    katakana: "シ",
    vowel: "i",
    romaji: "shi",
    hiragana: "し",
  },
  su: {
    consonant: "s",
    katakana: "ス",
    vowel: "u",
    romaji: "su",
    hiragana: "す",
  },
  se: {
    consonant: "s",
    katakana: "セ",
    vowel: "e",
    romaji: "se",
    hiragana: "せ",
  },
  so: {
    consonant: "s",
    katakana: "ソ",
    vowel: "o",
    romaji: "so",
    hiragana: "そ",
  },
  ta: {
    consonant: "t",
    katakana: "タ",
    vowel: "a",
    romaji: "ta",
    hiragana: "た",
  },
  chi: {
    consonant: "t",
    katakana: "チ",
    vowel: "i",
    romaji: "chi",
    hiragana: "ち",
  },
  tsu: {
    consonant: "t",
    katakana: "ツ",
    vowel: "u",
    romaji: "tsu",
    hiragana: "つ",
  },
  te: {
    consonant: "t",
    katakana: "テ",
    vowel: "e",
    romaji: "te",
    hiragana: "て",
  },
  to: {
    consonant: "t",
    katakana: "ト",
    vowel: "o",
    romaji: "to",
    hiragana: "と",
  },
  na: {
    consonant: "n",
    katakana: "ナ",
    vowel: "a",
    romaji: "na",
    hiragana: "な",
  },
  ni: {
    consonant: "n",
    katakana: "ニ",
    vowel: "i",
    romaji: "ni",
    hiragana: "に",
  },
  nu: {
    consonant: "n",
    katakana: "ヌ",
    vowel: "u",
    romaji: "nu",
    hiragana: "ぬ",
  },
  ne: {
    consonant: "n",
    katakana: "ネ",
    vowel: "e",
    romaji: "ne",
    hiragana: "ね",
  },
  no: {
    consonant: "n",
    katakana: "ノ",
    vowel: "o",
    romaji: "no",
    hiragana: "の",
  },
  ha: {
    consonant: "h",
    katakana: "ハ",
    vowel: "a",
    romaji: "ha",
    hiragana: "は",
  },
  hi: {
    consonant: "h",
    katakana: "ヒ",
    vowel: "i",
    romaji: "hi",
    hiragana: "ひ",
  },
  fu: {
    consonant: "h",
    katakana: "フ",
    vowel: "u",
    romaji: "fu",
    hiragana: "ふ",
  },
  he: {
    consonant: "h",
    katakana: "ヘ",
    vowel: "e",
    romaji: "he",
    hiragana: "へ",
  },
  ho: {
    consonant: "h",
    katakana: "ホ",
    vowel: "o",
    romaji: "ho",
    hiragana: "ほ",
  },
  ma: {
    consonant: "m",
    katakana: "マ",
    vowel: "a",
    romaji: "ma",
    hiragana: "ま",
  },
  mi: {
    consonant: "m",
    katakana: "ミ",
    vowel: "i",
    romaji: "mi",
    hiragana: "み",
  },
  mu: {
    consonant: "m",
    katakana: "ム",
    vowel: "u",
    romaji: "mu",
    hiragana: "む",
  },
  me: {
    consonant: "m",
    katakana: "メ",
    vowel: "e",
    romaji: "me",
    hiragana: "め",
  },
  mo: {
    consonant: "m",
    katakana: "モ",
    vowel: "o",
    romaji: "mo",
    hiragana: "も",
  },
  ra: {
    consonant: "r",
    katakana: "ラ",
    vowel: "a",
    romaji: "ra",
    hiragana: "ら",
  },
  ri: {
    consonant: "r",
    katakana: "リ",
    vowel: "i",
    romaji: "ri",
    hiragana: "り",
  },
  ru: {
    consonant: "r",
    katakana: "ル",
    vowel: "u",
    romaji: "ru",
    hiragana: "る",
  },
  re: {
    consonant: "r",
    katakana: "レ",
    vowel: "e",
    romaji: "re",
    hiragana: "れ",
  },
  ro: {
    consonant: "r",
    katakana: "ロ",
    vowel: "o",
    romaji: "ro",
    hiragana: "ろ",
  },
  ya: {
    consonant: "y",
    katakana: "ヤ",
    vowel: "a",
    romaji: "ya",
    hiragana: "や",
  },
  yi: {
    consonant: "",
    katakana: "",
    vowel: "",
    romaji: "",
    hiragana: "",
  },
  yu: {
    consonant: "y",
    katakana: "ユ",
    vowel: "u",
    romaji: "yu",
    hiragana: "ゆ",
  },
  ye: {
    consonant: "",
    katakana: "",
    vowel: "",
    romaji: "",
    hiragana: "",
  },
  yo: {
    consonant: "y",
    katakana: "ヨ",
    vowel: "o",
    romaji: "yo",
    hiragana: "よ",
  },
  wa: {
    consonant: "w",
    katakana: "ワ",
    vowel: "a",
    romaji: "wa",
    hiragana: "わ",
  },
  wi: {
    consonant: "",
    katakana: "",
    vowel: "",
    romaji: "",
    hiragana: "",
  },
  wu: {
    consonant: "",
    katakana: "",
    vowel: "",
    romaji: "",
    hiragana: "",
  },
  we: {
    consonant: "",
    katakana: "",
    vowel: "",
    romaji: "",
    hiragana: "",
  },
  wo: {
    consonant: "w",
    katakana: "ヲ",
    vowel: "o",
    romaji: "o",
    hiragana: "を",
  },
  n: {
    consonant: "",
    katakana: "ン",
    vowel: "",
    romaji: "n",
    hiragana: "ん",
  },
};
