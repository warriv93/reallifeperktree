import React, { Fragment, Component } from "react";
// import axios from "axios";
import { perkList } from "../../../api";
import { Perk as IPerk, QuestionType } from "../../../utils/types";

interface Props {
  urlperk: string | string[];
  perk?: IPerk;
}
interface State {
  urlperk: string | string[];
  perk?: IPerk;
}

class inputperkdata extends Component<State, Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      urlperk: this.props.urlperk,
      perk: null
    };
  }

  componentDidMount() {
    this.setState({
      perk: this.determinePerk(this.state.urlperk, perkList)
    });
  }

  determinePerk(urlperk: string | string[], perkList: Array<IPerk>) {
    return (
      perkList &&
      urlperk &&
      // check type of urltitle
      typeof urlperk === "string" &&
      perkList.map(perk => perk.title == urlperk && perk)[0]
    );
  }

  typeOfQuestion(type: QuestionType) {
    switch (type) {
      case 0:
        
        break;
    
      default:
        return (
          <div>
            1
          </div>
          )
    }
   
  }

  render() {
    let { perk } = this.state;
    console.log(perk);

    return (
      <Fragment>
        {perk &&
          perk.questions.map(question => (
            <div className="perk-card">
              <div className="left">
                <h3>{question.paragraph}</h3>
                {this.typeOfQuestion(QuestionType["scale1-10"])}
                <button className="btn btn-outline-danger">Previous</button>
                <button className="btn btn-outline-success">Next</button>
              </div>
            </div>
          ))}
      </Fragment>
    );
  }
}
export default inputperkdata;
