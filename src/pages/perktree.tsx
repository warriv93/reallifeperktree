import React, { Component } from "react";
import Layout from "../components/Layout";
import Perk from "../components/Perk";
import { Perk as IPerk } from "../interfaces";
import { perkList } from "../interfaces";

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
      perkList
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
