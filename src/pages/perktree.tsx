import React, { Component } from "react";
import Layout from "../components/Layout";
import Perk from "../components/Perk";
import { Perk as IPerk } from "../interfaces";

import strPerkImage from "../assets/perks/strPerk.png";
import endPerkImage from "../assets/perks/EndurancePerk.png";
import agiPerkImage from "../assets/perks/AgilityPerk.png";
import chaPerkImage from "../assets/perks/CharismaPerk.png";
import intPerkImage from "../assets/perks/intPerk.png";

// todo add images for end agi int

import "../style/perktree.scss";

//TODO - med en tom props måste jag ha med det?? - ta bort?
interface IProps {}

interface IState {
  perkList: Array<IPerk>;
}

export default class perktree extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      perkList: [
        { level: 2, title: "Strength", image:  strPerkImage},
        { level: 1, title: "Endurance", image:  endPerkImage },
        { level: 1, title: "Agility", image:  agiPerkImage },
        { level: 3, title: "Charisma", image:  chaPerkImage },
        { level: 1, title: "Intelligence", image:  intPerkImage }
      ]
    };
  }

  createPerkList(perkList: Array<IPerk>) {
    return perkList.map((perk, index) => {
      return <Perk key={index} level={perk.level} title={perk.title} image={perk.image}/>;
    });
  }

  render() {
    return (
      <Layout>
        <div className="perktree-container">
            {this.createPerkList(this.state.perkList)}
        </div>
      </Layout>
    );
  }
}
