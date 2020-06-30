import Layout from "../components/layout";
import image from "../assets/perks/CharismaPerk.png";
import Link from "next/link";
import Perktree from "./perktree";
import "../styles/home.scss";

const Index = () => (
  <Layout>
    <section className="fdb-block">
      <div className="container">
        <div className="info row align-items-center">
          <div className="col-10 col-sm-6 col-md-4 pb-4 pb-md-0">
            <img alt="perk-image" className="img-fluid rounded-0" src={image} />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h1>Real life perktree</h1>
            <p className="lead">
              Why isn't keeping track of personal progress easy in real life?
            </p>

            <p className="lead">
              Ever wondered what your stats, traits and skills are?
            </p>
            <p className="lead">
              Wouldn’t it be great to have a intuitive screen listing everything
              for you like in a video game?
            </p>
            <p>
              <Link href="/perktree">
                <a className="btn btn-success">
                  {" "}
                  Start progressing your perks now!
                </a>
              </Link>
            </p>
          </div>
        </div>
        <Perktree />
      </div>
    </section>
  </Layout>
);

export default Index;
