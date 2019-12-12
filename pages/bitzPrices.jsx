import Layout from '../components/Layout';
import Prices from '../components/Prices';

import Fetch from "isomorphic-unfetch"

const Bitz = (props) => (
  <Layout>
    <div>
      <h1>Bitcoin Prices</h1>
      <Prices bpi={props.bpi} disclaimer={props.disclaimer}/>
    </div>
  </Layout>
);

Bitz.getInitialProps = async function () {
    const res = await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();

    return {
        disclaimer: data.disclaimer,
        bpi: data.bpi
    }
}

export default Bitz;
