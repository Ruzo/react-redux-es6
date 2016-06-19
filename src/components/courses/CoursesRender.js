import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CoursesRender = ({courses, deleteCourse}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) =>
            <tr key={index}>
              <td><a href={course.watchHref} target="_blank">Watch</a></td>
              <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>{course.length}</td>
              <td>
                <a className="btn-xs" role="button" onClick={function(){deleteCourse(course);}}>
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

CoursesRender.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CoursesRender;