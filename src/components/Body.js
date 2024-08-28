import restaurantList from "./utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 
import { FOODFIRE_API_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Hooks/useOnlineStatus";
// what is state?
// In the context of React, state refers to a way to store and manage data that can change over time within a component.
// When the state of a component changes, React re-renders the component to reflect the new state.
//  State is often used to keep track of user input, form data, or any dynamic iformation that needs to be displayed in the UI.

//what is react hooks? functions
// React Hooks are functions that let you "hook into" React state and lifecycle features from function components.
// Before hooks, state and lifecycle methods could only be used in class components.
// Hooks allow function components to have state and other features without needing to convert them into class components.

// what is useState?
//The useState hook is a function that allows you to add state to your function components.
// It returns an array with two elements:

// The current state value.
// A function to update the state value.

function filterData(searchText, restaurantsList) {
  // console.log(searchText,restaurantsList);
  
  const filteredData = restaurantsList.filter((restaurants) => {
    // console.log(restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()));
   return restaurants.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
  // console.log(filterData);
  return filteredData;
}

const Body = () => {
  // always call useState inside body of functional component
  // useState is used to create local state  functions 
  // LOacal State Function = super powerful variable
  // good practice to create local variable at top inside the body of functional component
  // never create statevariable inside if-else/for loop/functions it can lead to inconsisancies
  // whenever  state variable updates ---React tirggers ReConcilliation cycle i.i. re renders the component
  const [searchText, setSearchText] = useState(); //returns =[variable name , function to update it]
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const isOnline = useOnlineStatus;
  // console.log(filteredRestaurants);

  //  the body page will render then use effect will fetch data afterwards
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // // useEffect  with empty array= useEffect is rendered only once
  // // no empty array-- renders everytime the component is re rendered

  // const fetchData = async () => {
  //   const fetchedData = await fetch(
  //     "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
  //   const json = await fetchedData.json();
  //   console.log(json);
  //   // optional chaining =?
  //   setRestaurantsList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
  // }; 



  useEffect(
    ()=> {
       fetchResData();
    }, []
 );
 
 function checkJsonData(jsonData) {
   
   for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
    let  checkData =
    jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        //  console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants,checkData);
      if (checkData !== undefined) {
          return checkData;
        }
   }
   
 }
   const fetchResData = async () => {
     // error handling using JS procedure of try and catch
     // finally{} can be used in case of function which are
     // supposed to return in try or catch part or both and u stll want something to execute in that function
     try {
       const response = await fetch(FOODFIRE_API_URL);
       const JSON = await response.json();
       console.log("THIS IS DATA BC",JSON);
       // initialize checkJsonData() function to check Swiggy Restaurant data
 
 
    // make functional call to checkJsonData()
    const resData = checkJsonData(JSON);
    // console.log("This is resData BC",resData);
    setRestaurantsList(resData);
 
     } catch (error) {
       console.log("restaurants ka data uthane me hag diye");
     }
   };

if(isOnline === false ) 
  return ( <h1>Looks like you are Offline! Check your internet connection.</h1>
  );

  
  // conditional rendering
  if(restaurantsList.length === 0 ){

    
   return < Shimmer/>;
}
  return (
    // whenever the state variable changes , react rerenders the whole component 
    <> 
    
     
      <div className="filter">
      <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
        <button
          className="search-btn"
          onClick={() => {
            
            // need to filter the data
            const filteredData = filterData(searchText, restaurantsList);
            // update the state
            setFilteredRestaurants(filteredData);
          }}
        >  
          Search
        </button>
        <button
          className="filterBTN"
          onClick={() => {
            const filteredData = restaurantsList.filter((restaurants) => 
              restaurants.info.avgRating > 4
            );
            setFilteredRestaurants(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res_container">
        {(filteredRestaurants.length>0?filteredRestaurants:restaurantsList)?.map((restaurants) => {
          return (
           <Link key={restaurants.info.id} to={"/restaurants/" + restaurants.info.id}>
             <RestaurantCard {...restaurants.info}  />
            </Link>    
            // this Link tag is provided by react-router-dom 
            // it gets converted into an anchor tag in React Dom 
                 );
        })}
      </div>
     
    </>
  );
};
export default Body;








