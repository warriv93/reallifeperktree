import React, { Component } from "react";
import Perklevel from "./Perklevel";

import perkLevelImage from "../assets/404Code.jpg";
interface IProps {
  title?: string;
  level: number;
}

interface IState {
  title?: string;
  perkLevel: number;
}
let amountOfLevels: number = 5;

export default class Perk extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: this.props.title,
      perkLevel: this.props.level
    };
  }

  createPerkLevels(amountOfLevels: number) {
    for (let index: number = 1; index < amountOfLevels; index++) {
      <Perklevel image={perkLevelImage} />;
    }
  }

  render() {
    return (
      <div className="perktree-perk-container">
        <ul className="perk">
          <li className="perk-level title">
            <span>{this.props.title}</span>
          </li>
          {this.createPerkLevels(amountOfLevels)}
        </ul>
      </div>
    );
  }
}
