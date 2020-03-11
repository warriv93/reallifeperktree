import React, { Component } from "react";
import Perklevel from "./PerkLevels";


interface IProps {
  title: string;
  level: number;
  image: string;
  usedInPerkHeader?: boolean; // ? = means u dont need to include in when creating the component
  description?: string;
}

interface IState {
  title: string;
  level: number;
  image: string;
  usedInPerkHeader: boolean;
  description?: string;
}

export default class Perk extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: this.props.title,
      level: this.props.level,
      image: this.props.image,
      usedInPerkHeader: this.props.usedInPerkHeader || false,
      description: this.props.description
    };
  }

  createPerkLevels(
    currentLevel: number,
    totalLevels: number,
    levelAchievedImage: string,
    title: string,
    usedInPerkHeader: boolean
  ) {
    let levels = [];
    //push desired nbr of levels to the perk
    for (let index = 1; index < totalLevels+1; index++) {
      levels.push(<Perklevel usedInPerkHeader={usedInPerkHeader} grayscale={currentLevel < index ? "grayscale" : ""} image={levelAchievedImage} title={title} />)
    }
    return levels;
  }

  render() {
    let {level, image, title, usedInPerkHeader, description} = this.state;
    return (
      <div className="perk-container">
        <ul className="perk">
          <li className="perk-level title">
            <span>{this.props.title}</span>
          </li>
          {this.createPerkLevels(
            level,
            5,
            image,
            title,
            usedInPerkHeader
          )}
        </ul>
        {usedInPerkHeader && description && (
          <div className="perk-description">
            <p>{description}</p>
          </div>
        )}
      </div>
    );
  }
}
