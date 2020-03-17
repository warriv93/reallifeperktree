import React, { Fragment, Component } from "react";
import axios from "axios";

interface Props {
  data?: {
    value: string
    url: string
    icon_url: string
  };
}
interface State {
  data?: {
    value: string
    url: string
    icon_url: string
  };}

class PerkCard extends Component<State, Props> {
  constructor (props: Props){
    super(props)

    this.state = {
      data: null
    }
  }

 componentDidMount() {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(response => {
        // handle success
        this.setState({data: response.data}) 
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

render () {
  let {data} = this.state;
  console.log(data);

  return (
    <Fragment>
      {data && (
        <a href={data.url}>
        <div className="perk-card">
          <div className="left">
          <h3>{"perk.title"}</h3>
          <p>{data.value}</p>
          <button className="btn btn-outline-success">Learn</button>
          </div>
          <div className="right"><img src={data.icon_url} alt="image"/></div>
        </div>
      </a>
      )}
      
    </Fragment>
  );
}
}
export default PerkCard;
