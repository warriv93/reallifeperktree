import Navbar from '../components/Navbar';
import Header from 'next/head';
import "../style/globalStyles.scss"

const Layout = props => (
    <div>
        <Header>
            <title>Perktree</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
            <link href="../style/styles.scss" rel="stylesheet" />
        </Header>
        <Navbar/> 
        <div className="container">
            {props.children}
        </div>
    </div>
    
  );
  
  export default Layout;
  