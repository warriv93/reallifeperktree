import * as React from 'react'
import Navbar from '../components/Navbar';
import Header from 'next/head';
import "../styles/globalStyles.scss";
import {getUserLoggedin} from "../api/user";

type Props = {}

const Layout: React.FunctionComponent<Props> = ({children}) => (
    <div>
        <Header>
            <title>Perktree</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
            <link href="../style/styles.scss" rel="stylesheet" />
        </Header>
        <Navbar loggedin={getUserLoggedin() || false}/> 
        <div className="container">
            {children}
        </div>
    </div>
  );
  
  export default Layout;
  