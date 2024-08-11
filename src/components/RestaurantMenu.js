import {
  FOODFIRE_MENU_API_URL,
  FOODFIRE_API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  ITEM_IMG_CDN_URL,
} from "./constants";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
   
   const [resPageList , setResPageList]= useState([]);


useEffect(
   ()=> {
      fetchResData();
   }, []
);

  const fetchResData = async () => {
    // error handling using JS procedure of try and catch
    // finally{} can be used in case of function which are
    // supposed to return in try or catch part or both and u stll want something to execute in that function
    try {
      const response = await fetch("FOODFIRE_API_URL");
      const JSON = await response.json();
      console.log(JSON);
      // initialize checkJsonData() function to check Swiggy Restaurant data
      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
          const checkData =
            jsonData?.data?.cards[i]?.card?.card?.getElements?.infoWithStyles
              ?.restaurants;
        }
        if (checkData != undefined) {
          return checkdata;
        }
      }


   // make functional call to checkJsonData()
   const resData = checkJsonData(JSON);
           
    setResPageList(resData);

    } catch (error) {
      console.log("menu ka data uthane me hag diye");
    }
  };
  return (
    <>
      <div>
        <h2></h2>
      </div>
    </>
  );
};
export default RestaurantMenu;
