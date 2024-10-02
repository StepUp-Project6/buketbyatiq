import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RedirectButton = ({ name, to, classname }) => {
  return (
    <>
      <button>
        <Link to={to} className={classname}>
          {name}
        </Link>
      </button>
    </>
  );
};

RedirectButton.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  classname: PropTypes.string,
};

export default RedirectButton;
