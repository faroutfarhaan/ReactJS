import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Hooks/useOnlineStatus";
const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="w-12 "
      src="https://raw.githubusercontent.com/chetannada/Namaste-React/main/public/Images/foodFireLogo.png"
    />
  </a>
);

const Header = () => {
  const [BTNname, setBTNname] = useState("Login");
  const onlineStatus = useOnlineStatus();
 //on clicking Login , the header component will render and
//  hence a fresh const state variable will created with value logout and hence it will get displayed
// in this way the principle of JS of const variable is preserved
  return (
    <div className="flex justify-between p-5 bg-blue-100 shadow-lg mb-4 fixed top-0 left-0 right-0 z-50">
      <Title />
      <div className="flex items-center">
        <ul className="flex p-5 ">
          {/* the link tag is provided by react router dom */}
          <li className="px-5"> Online Status:  {onlineStatus ? "🟢": "🔴"} </li>
          <li className="px-5"><Link to="/">Home</Link></li>
          <li className="px-5"><Link to="/contact">Contact</Link></li>
          <li className="px-5"><Link to="/about">About</Link></li>
          <li className="px-5">Cart</li>
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
