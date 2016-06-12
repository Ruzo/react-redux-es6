import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CoursesRender from './CoursesRender';

class CoursesPage extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      course:{title: ""}
    };
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onChangeCourse(e){
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    this.props.createCourse(this.state.course);
  }

  showCourse(course, index){
    return <p key={index}>{course.title}</p>;
  }

  render(){
    return(
      <div>
        <CoursesRender
          courses={this.props.courses}
          showCourse={this.showCourse}
          courseTitle={this.state.course.title}
          onChangeCourse={this.onChangeCourse}
          onClickSave={this.onClickSave}
          />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    createCourse: bindActionCreators(courseActions.createCourse, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);