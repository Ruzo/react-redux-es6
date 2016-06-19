import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoursesRender from './CoursesRender';
import {browserHistory} from 'react-router';
import {deleteCourse} from '../../actions/courseActions';

class CoursesPage extends React.Component{

  constructor(props, context){
    super(props, context);

    this.deleteCourse = this.deleteCourse.bind(this);
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  deleteCourse(id){
    // console.log(`Delete button return: ${id}`);
    this.props.deleteCourse(id);
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        {this.props.courses[0] &&
          <CoursesRender
            courses={this.props.courses}
            deleteCourse={this.deleteCourse}
          />}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    deleteCourse: bindActionCreators(deleteCourse, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);