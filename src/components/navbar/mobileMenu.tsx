import "./styles/mobileMenu.scss";
import Menuitems from "./menuitems";

type Props = {
  toggle: string;
};

const menu: React.FunctionComponent<Props> = ({ toggle }) => (
  <aside id="menu" className={toggle}>
    <div className="menu-container">
      <section className="main">
        <Menuitems mobileMenu={true} />
      </section>
      {/* IF U WANT THE CLOSE cross ON THE SIDE OF THE MENU INSTEAD */}
      {/* <div className=".navbar-toggler-icon">
        <FontAwesomeIcon icon="times" />
      </div> */}
    </div>
  </aside>
);
export default menu;
