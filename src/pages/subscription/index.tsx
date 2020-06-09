import "./style/style.scss";
import "../../styles/froala_blocks.scss";

import Layout from "../../components/layout";

export default function subscription() {
  return (
    <Layout>
      <section className="fdb-block">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1>Pricing Plans</h1>
            </div>
          </div>

          <div className="box-container row mt-5 align-items-center no-gutters">
            <div className="box col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center shadow">
              <div className="bg-white pb-5 pt-5 pl-4 pr-4 rounded-left">
                <h2 className="font-weight-light">Basic</h2>

                <p className="h1 mt-5 mb-5">
                  <strong>$19</strong> <span className="h4">/year</span>
                </p>

                <ul className="text-left">
                  <li>Limited</li>
                  <li>Limited</li>
                  <li>Limited</li>
                </ul>

                <p className="text-center pt-4">
                  <a href="" className="btn btn-outline-dark">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>

            <div className="box col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center shadow fdb-touch ">
              <div className="pb-5 pt-5 pl-4 pr-4">
                <h2 className="font-weight-light">Popular</h2>

                <p className="h1 mt-5 mb-5">
                  <strong>$49</strong> <span className="h4">/month</span>
                </p>

                <ul className="text-left">
                  <li>Unlimited</li>
                  <li>Unlimited</li>
                  <li>Unlimited</li>
                </ul>

                <p className="text-center pt-4">
                  <a href="" className="btn btn-primary btn-shadow">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>

            <div className="box col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center shadow">
              <div className="bg-white pb-5 pt-5 pl-4 pr-4 rounded-right">
                <h2 className="font-weight-light">Family</h2>

                <p className="h1 mt-5 mb-5">
                  <strong>$99</strong> <span className="h4">/month</span>
                </p>

                <ul className="text-left">
                  <li>Unlimited</li>
                  <li>Unlimited</li>
                  <li>Unlimited</li>
                </ul>

                <p className="text-center pt-4">
                  <a href="" className="btn btn-outline-dark">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
