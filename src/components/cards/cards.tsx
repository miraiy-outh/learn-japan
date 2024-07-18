import { Card } from "./card/card";
import "./cards.scss";
import { letters } from "../../constants/letters";

type TCard = "hiragana" | "katakana";

export function Cards({ type }: { type: TCard }) {
  const alphabet = Object.values(letters);
  return (
    <div className="cards">
      {alphabet.map((letter) => {
        return type === "hiragana" ? (
          <Card word={letter.hiragana} translate={letter.romaji} />
        ) : (
          <Card word={letter.katakana} translate={letter.romaji} />
        );
      })}
    </div>
  );
}
