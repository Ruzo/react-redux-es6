import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import Spinner from 'react-spinner';

const Header = ({dbStatus}) => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {(dbStatus > 0) && <Spinner />}
    </nav>
  );
};

Header.propTypes = {
  dbStatus: PropTypes.number.isRequired
};

export default Header;