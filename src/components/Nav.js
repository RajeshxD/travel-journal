import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthAsia} className="nav--logo" />
      <h5 className="nav--title">my Travel journal</h5>
    </nav>
  );
}
