//ReactDOM.render(<p>Hello World from React</p>, document.getElementById("root"));
//old version
// ReactDOM.render(
//     <div>
// <h1>React Course</h1>
// <p>We will learn react in this course.</p>
//     </div>,
//  document.getElementById("title")
// );


//recommend approach

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //not html, it's JSX
    //babel takes html and converts to something javascript understands
  <div>
    <h1>React Course</h1>
    <p>We will learn react in this course.</p>
  </div>
);
