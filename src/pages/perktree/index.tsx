import Layout from "../../components/layout";
import Perktree from "./comp/perktree";

// allows home index page to render only the perktree component without the Layout (header etc)
export default function perktree() {
  return (
    <Layout>
      <Perktree />
    </Layout>
  );
}
