import React, { Component } from "react";
import Layout from "../components/Layout";
// import Perk from "../components/Perk";
import { Perk as IPerk } from "../interfaces";

import "../style/perktree.scss";

interface IProps {}

interface IState {
  perkList: Array<IPerk>;
}

export default class perktree extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      perkList: [
        { level: 0, title: "Strength" },
        { level: 0, title: "Endurance" },
        { level: 0, title: "Agility" },
        { level: 0, title: "Charisma" },
        { level: 0, title: "Intelligence" }
      ]
    };
  }

  createPerkList() {
    console.log("yes");

    this.state.perkList.map((level, title) => {
      console.log(level, title);

      //   return <Perk level={level} title={title} />;
    });
  }

  render() {
    return (
      <Layout>
        <div className="perktree-container">{this.createPerkList}</div>
      </Layout>
    );
  }
}
