import Perklevel from "./perklevels";
import "../styles/perk.scss";

interface IProps {
  title: string;
  level: number;
  image: string;
  usedInPerkHeader?: boolean; // ? = means u dont need to include in when creating the component
  description?: string;
}

export default function Perk(props: IProps) {
  function renderPerkLevels() {
    let levels = [];
    let totalLevels = 5;

    //push desired nbr of levels to the perk
    for (let index = 1; index < totalLevels + 1; index++) {
      levels.push(
        <Perklevel
          key={index}
          usedInPerkHeader={props.usedInPerkHeader || false}
          grayscale={props.level < index ? "grayscale" : ""}
          currentLevel={props.level}
          image={props.image}
          title={props.title}
        />
      );
    }
    return levels;
  }

  return (
    <div className="perk-container">
      <ul className="perk">
        <li className="perk-level title">
          <span>{props.title}</span>
        </li>
        {renderPerkLevels()}
      </ul>
      {props.usedInPerkHeader && props.description && (
        <div className="perk-description">
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
}
