
import React from "react";
import ReactDOM from "react-dom/client";
// parcel is doing HMR Hot Module Reloading
// using file watcher algorithm
//parcel is a bundler
// it also minify code and also performs cleaning 
//  also performs image optimisation
// does caching while development
//  also allows HTTPS
// manages port number
// we should put parcel.cache in gitignore
// uses consistent hashing algorithm to perform caching
// zero config bundler
//  Transitive dependencies
// Tree shaking:removing unwanted codes
// to remove consol.log we need to us babel-plugin-tranform-remove-console

const heading= React.createElement("h1",{}, "heading 1");
const unorderlist = React.createElement("ul",{},[React.createElement("li",{},"About us"),
    React.createElement("li",{},"contact us")
    
]);
// const parentdiv = React.createElement("div",{},[heading,unorderlist]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
