import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

function SubHeader() {
  return <p>This will be an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

function MainBody() {

  const whatWeWillLearn ="React JS";
  const num = 3;
  return (
    <div>
      <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia!</p>
      <p>Total Lecture - {num}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
        Enter Task : <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div> */}
    </div>
  );
}
function Footer() {
  return <p>Happy Coding!</p>;
}
root.render(
  <div className="container">
    <Header />
    <MainBody />
    <Footer />
  </div>
);
