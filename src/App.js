// React.createElement=> Object=>HTML(DOM)
// JSX ES6 REACT are not mandatory to create app
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./components/Header";
// named import
// import {Title} from "./components/Header"
// "./components/Header.jsx"
// import * as obj from "./components/Header"
// obj.Title
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"));
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

// const heading = React.createElement("h1", {}, "heading 1");
// const unorderlist = React.createElement("ul",{},[React.createElement("li",{},"About us"),
// React.createElement("li",{},"contact us")

// ]);

// JSX=>React.createElement=> Object=>HTML(DOM)
// one function one parent
// use React.fragment to avoid using a extra div in each function having more than one tags.
// <React.fragment> </React.fragment> or <> </>
// const heading2 = (
//   <h2 id="title" key="h2" className="abc">
//     Namastey Chutiyo
//   </h2>
// );

// this is not html , this html like syntaxed JSX expression

// React components
// FUNCTIONAL COMPONENTS: its just a normal function
// better to start the name of component with capital letter

// props = properties : nothing but functional parameter
// object to pass data from parent component to child component
// no key < index as key << unique key
// React reconcilliation is bridge btwn actual DOM and virtualDOM
// dif algorithm is used for this process

// In React Router DOM, an Outlet is a component used to render child routes within a parent route.
//  It's a placeholder for where nested routes will appear in your UI. When you define nested routes, 
// React Router uses the Outlet component to indicate where the child route's content should be displayed.
const AppLayout = () => (
  //  /*React.Fragment*/
  <>
    <Header />
    <Outlet />
    <Footer/>
  </>
);
//  the App Router in the latest versions of React Router DOM (v6.4 and above) helps manage routes
//  more efficiently by combining data fetching and route rendering in one place.
//  It makes things like loading data, handling forms, and showing error messages easier to manage.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  //   {
  // path:"/about",
  // element:<About/>,
  //   }
  //   ,{
  //     path: "/contact",
  //     element:<Contact/>,
  //   }
]);
// the root refers to the main entry point 
// where your React application is rendered into the DOM (Document Object Model) of the web page.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>);
//