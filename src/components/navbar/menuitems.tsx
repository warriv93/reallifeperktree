import "./styles/mobilemenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
interface Props {
  mobileMenu?: boolean;
}

const menu: React.FunctionComponent<Props> = ({ mobileMenu }) => (
  <>
    <span>
      <li>
        <Link href="/">
          <a className="nav-link">
            {" "}
            Home
            {mobileMenu && (
              <FontAwesomeIcon className="fa" icon="angle-right" />
            )}
          </a>
        </Link>
      </li>
    </span>
    <span>
      <li>
        <Link href="/perktree">
          <a className="nav-link">
            Perktree
            {mobileMenu && (
              <FontAwesomeIcon className="fa" icon="angle-right" />
            )}
          </a>
        </Link>
      </li>
    </span>
    <span>
      <li>
        <Link href="/subscription">
          <a className="nav-link">
            Pricing
            {mobileMenu && (
              <FontAwesomeIcon className="fa" icon="angle-right" />
            )}
          </a>
        </Link>
      </li>
    </span>
  </>
);
export default menu;
