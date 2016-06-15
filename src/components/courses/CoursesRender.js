import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CoursesRender = ({courses}) => {
  return (
    <div>
        <h1>Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Length</th>
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
              </tr>
            )}
          </tbody>
        </table>
        <Link to="/course">ADD A COURSE</Link>
    </div>
  );
};

CoursesRender.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CoursesRender;