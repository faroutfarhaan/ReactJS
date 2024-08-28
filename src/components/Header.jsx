import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
    />
  </a>
);

const Header = () => {
  const [BTNname, setBTNname] = useState("Login");
 //on clicking Login , the header component will render and
//  hence a fresh const state variable will created with value logout and hence it will get displayed
// in this way the principle of JS of const variable is preserved
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          {/* the link tag is provided by react router dom */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>cart</li>
          <button className="loginBTN" onClick={
            ()=>{ if(BTNname === "Login"){ setBTNname("Logout")}
               else {setBTNname("Login")}
          }
          }>{BTNname}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
// these 2 will work same
// const HeaderComponent2 = () =>
//      (
//       <div>
//         {/* using react element in a component  */}
//         {heading2}
//         {/* but we dont use it like this */}
//         {/* instead we create element as a fucntion and then we use it as a tag */}
//          <Title/>
//          {/* or */}
//          {Title()}
//         <h1>Namastey</h1>
//         <h2>functional components</h2>
//       </div>
//     );
