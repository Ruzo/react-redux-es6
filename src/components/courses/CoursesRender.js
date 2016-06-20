import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CourseRow from './CourseRow';

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
            <CourseRow
              key={index}
              course={course}
              deleteCourse={deleteCourse}
            />
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