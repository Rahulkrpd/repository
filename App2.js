


/* 
import React from "react";
import ReactDOM from "react-dom/client"; */

// import { ReactDOM } from 'react-dom';

// React.createElement=>ReactElement js object =>HTMLELEMENT(render)

/* 
const parent = React.createElement("div", { id: "parent" },

    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "first h1 tag"),
        React.createElement("h2", {}, " seciond h2 tag ")]

    ));
 


//jsx  :-help to  not using  above  suff like  ,it make it easy to write write



const heading = React.createElement(
    "h1",
    {
        id: "heading"
    },
    "Hello wolrd from React "
)

// console.log(heading)// return object
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(parent);   //   */



/// Episode 3 

/* 
const heading = React.createElement("h1",{id:"heading"},"This is hello world from React ")
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)

root.render(heading) */





import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span>rahul</span>

const Title = function() {
    return (<h1>Namaste React using jsx</h1>,
    {ele}
    );
}







//JSX  is like syntax or  XML -like syntax
//JSX (transpiled before it reaches the js  )-Parcel -Babel
// jsx = >Babel transpiled to React.createElement =>ReactELement-js object =>HTMLElement(render)


// React Element
const jsxHeading = <h1 id="heading" className="head">Namste React app</h1>;
console.log(jsxHeading);

// React funtional Components
const number =1000;// js code 
const HeadingComponent = () => (
    <div id="Container">
        <Title />
       
        
        <h1>Heading Element from react Component</h1>
    </div>
)
// above and below are same code
const HeadingComponent2 = () => (
    <h1> Namaste React Functional Component</h1>
)





const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />);









