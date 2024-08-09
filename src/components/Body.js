import restaurantList from "./constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 

// what is state?
// In the context of React, state refers to a way to store and manage data that can change over time within a component.
// When the state of a component changes, React re-renders the component to reflect the new state.
//  State is often used to keep track of user input, form data, or any dynamic information that needs to be displayed in the UI.

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
  // console.log(filteredRestaurants);

  //  the body page will render then use effect will fetch data afterwards
  useEffect(() => {
    fetchData();
  }, []);
  // useEffect  with empty array= useEffect is rendered only once
  // no empty array-- renders everytime the component is re rendered

  const fetchData = async () => {
    const fetchedData = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await fetchedData.json();
    console.log(json);
    // optional chaining =?
    setRestaurantsList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
  }; 
  
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
            <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
          );
        })}
      </div>
     
    </>
  );
};
export default Body;








