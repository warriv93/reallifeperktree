import React, { useState } from "react";
import Layout from "../../components/layout";

import Login from "./component/login/index";
import CreateNew from "./component/newuser/index";
import "./styles/login.scss";

function loginContainer(props) {
  const [showCreateNew, setCreateNew] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  let loginClass,
    createnewClass = " ";
  //determine css active for create user or login top buttons
  showCreateNew ? (createnewClass = "active") : (loginClass = "active");

  return (
    <Layout>
      <div className="outer-container">
        <div>
          <button
            className={"container-btns btn  " + loginClass}
            onClick={() => {
              setCreateNew(false);
              setShowLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={"container-btns btn  " + createnewClass}
            onClick={() => {
              setCreateNew(true);
              setShowLogin(false);
            }}
          >
            Create user
          </button>
        </div>
        {showLogin && <Login />}
        {showCreateNew && <CreateNew />}
      </div>
      {/* TODO add info items containers */}
    </Layout>
  );
}

export default loginContainer;
