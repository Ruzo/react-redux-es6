import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';


class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };

    this.updateFieldState = this.updateFieldState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({course: nextProps.course});
    }
  }

  updateFieldState(e){
    const field = e.target.name;
    let course = this.state.course;
    course[field] = e.target.value;
    return this.setState({course: course});
  }

  saveCourse(e){
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render(){
    return(
      <CourseForm
        allAuthors={this.props.authors}
        errors={this.state.errors}
        course={this.state.course}
        onChange={this.updateFieldState}
        onSave={this.saveCourse}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // router: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id;
  let course = {id:"", watchHref:"", title:"", authorId:"", length:"", category:""};
  if(courseId && state.courses.length > 0){
    course = state.courses.filter(eachCourse => eachCourse.id == courseId)[0] || null;
  }

  let authorsDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });
  return {
    course: course,
    authors: authorsDropdown
  };
}


function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
