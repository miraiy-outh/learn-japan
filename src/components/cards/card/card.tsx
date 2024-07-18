import "./card.scss";

export function Card({ word, translate }: { word: string; translate: string }) {
  return (
    <div className="card">
      <div className="card__word">{word}</div>
      <div className="card__translate">{translate}</div>
    </div>
  );
}