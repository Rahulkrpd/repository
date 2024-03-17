/* 
/*
 <div id = "parent">
   <div id = child>
     <h1>Heading</h1>
     <h2>sbling of h2</h2>
 

     </div>
   </div>  
      
   ReacElement(Object)=  HTML(Browser Understands)

/*  */


const parent = React.createElement("div", { id: "parent" },

    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]

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

root.render(parent);   //  