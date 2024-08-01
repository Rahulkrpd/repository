import React from "react";
import ReactDOM from "react-dom"; // Correct import

const ele = <span>  React element</span>;  //react element


const data =1000;


//element react element
const Title = ()=>(
  <h1 id ="first">
    Namste React using JSX:-
      {data} 
  </h1>
);


// react Components
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1>React functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);