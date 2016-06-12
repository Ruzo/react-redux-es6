import React from 'react';

const CoursesRender = ({courses, showCourse, courseTitle, onChangeCourse, onClickSave}) => {
  return (
    <div>
        <h1>Courses</h1>
        <div>
        {courses.map(showCourse)}
        </div>
        <h2>Add a course</h2>
        <input
          type="text"
          value={courseTitle}
          onChange={onChangeCourse}
        />
        <input
          type="submit"
          value="Save"
          onClick={onClickSave}
        />
    </div>
  );
};

export default CoursesRender;