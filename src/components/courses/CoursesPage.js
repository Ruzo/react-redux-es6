import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoursesRender from './CoursesRender';

class CoursesPage extends React.Component{

  constructor(props, context){
    super(props, context);
  }

  render(){
    return(
      <div>
        <CoursesRender
          courses={this.props.courses}
          />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);