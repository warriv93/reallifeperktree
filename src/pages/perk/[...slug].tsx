import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import "./styles/perkpage.scss";


//catches wrong urls
//Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:
//pages/post/[...slug].js matches /post/a, but also /post/a/b, /post/a/b/c and so on.
// https://nextjs.org/docs/routing/dynamic-routes
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  return (
    <Layout>
      <p>Page {slug} does not exist</p>
    </Layout>
  );
};

export default Slug;
