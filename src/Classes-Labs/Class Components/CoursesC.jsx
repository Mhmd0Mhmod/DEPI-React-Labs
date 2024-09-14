import React from "react";
class CoursesC extends React.Component {
  render() {
    const {
      courses: [courseOne, courseTwo, courseThree, courseFour],
      children,
    } = this.props;
    return (
      <>
        <h1>My Courses</h1>
        <ul>
          <li>{courseOne}</li>
          <li>{courseTwo}</li>
          <li>{courseThree}</li>
          <li>{courseFour}</li>
        </ul>
        {children}
      </>
    );
  }
}
export default CoursesC;
