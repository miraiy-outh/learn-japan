import "./sub-menu-button.scss";

type TSubMenuButtonName = "add" | "test";

export function SubMenuButton({
  name,
  color,
}: {
  name: TSubMenuButtonName;
  color: string;
}) {
  return (
    <div className="button__sub-menu__container">
      <button className="button__sub-menu" style={{ backgroundColor: color }}>
        {name}
      </button>
    </div>
  );
}
