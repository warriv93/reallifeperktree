import React, { Component } from "react";
import Layout from "../components/Layout";


// todo add images for end agi int

import "../style/perkpage.scss";

//TODO - med en tom props måste jag ha med det?? - ta bort?
interface IProps {}

interface IState {
}

export default class perktree extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <Layout>
          <p>PERKPAGE</p>
      </Layout>
    );
  }
}
