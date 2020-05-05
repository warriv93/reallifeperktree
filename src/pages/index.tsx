import Layout from "../components/Layout";
import image from "../assets/perks/CharismaPerk.png";
import Link from "next/link";

const Index = () => (
  <Layout>
    <section className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">
            <img alt="perk-image" className="img-fluid rounded-0" src={image} />
          </div>
          <div className="col-12 ml-auto col-md-6 col-lg-5">
            <h1>Real life perktree</h1>
            <p className="lead">
              Why isn't keeping track of personal progress this easy in real
              life? Ever wondered who you really are? What your stats, traits
              and skills are? Wouldn’t it be great to have a intuitive screen
              listing everything for you.
            </p>
            <p>
              <Link href="/perktree">
                <a className="btn btn-success"> Start progressing</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
