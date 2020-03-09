import React, { Component } from "react";
import Perklevel from "./Perklevel";

interface IProps {
  title: string;
  level: number;
  image: string;
}

interface IState {
  title: string;
  level: number;
  image: string;
}

export default class Perk extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: this.props.title,
      level: this.props.level,
      image: this.props.image
    };
  }

  createPerkLevels(
    currentLevel: number,
    totalLevels: number,
    levelAchievedImage: string,
    title: string,
  ) {
    let levels = [];
    //push desired nbr of levels to the perk
    for (let index = 1; index < totalLevels+1; index++) {
        levels.push(<Perklevel grayscale={currentLevel < index ? "grayscale" : ""} image={levelAchievedImage} title={title} />)
    }
    return levels;
  }

  render() {
    return (
      <div className="perktree-perk-container">
        <ul className="perk">
          <li className="perk-level title">
            <span>{this.props.title}</span>
          </li>
          {this.createPerkLevels(
            this.state.level,
            5,
            this.state.image,
            this.state.title,
          )}
        </ul>
      </div>
    );
  }
}
