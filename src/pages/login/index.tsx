import * as React from "react";
import Layout from "../../components/Layout";

import Login from "./component/login/index";
import CreateNew from "./component/newuser/index";
import "./styles/index.scss";

type Props = {};

type State = {
  showLogin: boolean;
  showCreateNew: boolean;
};
class loginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showLogin: true,
      showCreateNew: false,
    };
  }

  render() {
    let loginClass, createnewClass = " ";
    this.state.showCreateNew ? createnewClass = "active" : loginClass = "active"
    
    return (
      <Layout>
        <div className="outer-container">
            <div>
              <button
                className={"container-btns btn  " + loginClass}
                onClick={() =>
                  this.setState({
                    showLogin: true,
                    showCreateNew: false,
                  })
                }
              >
                Login
              </button>
              <button
                className={"container-btns btn  " + createnewClass}
                onClick={() =>
                  this.setState({
                    showLogin: false,
                    showCreateNew: true,
                  })
                }
              >
                Create user
              </button>
            </div>
            {this.state.showLogin && <Login />}
            {this.state.showCreateNew && <CreateNew />}
          </div>
        {/* TODO add info items containers */}
      </Layout>
    );
  }
}

export default loginContainer;
