import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';

class App extends React.Component{
  render(){
    return(
      <div className="fluid-container">
        <Header
          dbStatus = {this.props.dbStatus}
        />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    dbStatus: state.dbStatus
  };
}

App.propTypes = {
children: PropTypes.object.isRequired,
dbStatus: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(App);