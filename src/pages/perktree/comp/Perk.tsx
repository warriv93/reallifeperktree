import React, { useState } from "react";
import Perklevel from "./PerkLevels";
import "../styles/perk.scss";
// import { perkList } from "../../../api";

interface IProps {
  title: string;
  level: number;
  image: string;
  usedInPerkHeader?: boolean; // ? = means u dont need to include in when creating the component
  description?: string;
}

export default function Perk (props: IProps) {
  const [title] = useState(props.title);
  const [currentLevel] = useState(props.level);
  const [image] = useState(props.image);
  const [usedInPerkHeader] = useState(props.usedInPerkHeader || false);
  const [description] = useState(props.description);

  function createPerkLevels() {
    let levels = [];
    let totalLevels = 5;

    //push desired nbr of levels to the perk
    for (let index = 1; index < totalLevels + 1; index++) {
      levels.push(
        <Perklevel
          key={index}
          usedInPerkHeader={usedInPerkHeader}
          grayscale={currentLevel < index ? "grayscale" : ""}
          image={image}
          title={title}
        />
      );
    }
    return levels;
  }

  return (
    <div className="perk-container">
      <ul className="perk">
        <li className="perk-level title">
          <span>{title}</span>
        </li>
        {createPerkLevels()}
      </ul>
      {usedInPerkHeader && description && (
        <div className="perk-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
