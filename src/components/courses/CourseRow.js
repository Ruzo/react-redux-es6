import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseRow = ({course, deleteCourse}) => {

  function superDeleteCourse(){
    deleteCourse(course);
  }

  return (
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
        <td>
          <a className="btn-xs" role="button" onClick={superDeleteCourse}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </a>
        </td>
      </tr>
  );
};

CourseRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseRow;