import Student from "./Components/Student";
import StudentReview from "./Components/StudentReview";
import React from "react";
class MainBody extends React.Component() {
    render(){

    
  const whatWeWillLearn = "React JS";
  const num = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia!
      </p>
      <p>Total Lecture - {num}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div className="container row">Students Enrolled</div>
      <Student
        experience={2}
        name="Kris Walley"
        headshot="https://picsum.photos/100"
      >
        <StudentReview/>
      </Student>
      <Student
        experience={5}
        name="Angel Patrice"
        headshot="https://picsum.photos/101"
      ><StudentReview/></Student>
      <Student
        experience={7}
        name="Rene Parker"
        headshot="https://picsum.photos/102"
      />
    </div>
  );
}
}
export default MainBody;
