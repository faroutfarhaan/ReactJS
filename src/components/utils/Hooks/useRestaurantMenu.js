import {
    FOODFIRE_MENU_API_URL,
    FOODFIRE_API_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
    ITEM_IMG_CDN_URL,
  } from "../constants";
  import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
    const [resPageList, setResPageList] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  console.log(resId.resId, "this is resid");

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    // error handling using JS procedure of try and catch
    // finally{} can be used in case of function which are
    // supposed to return in try or catch part or both and u stll want something to execute in that function
    try {
      const response = await fetch(FOODFIRE_MENU_API_URL + resId.resId);
      const JSON = await response.json();
      console.log(JSON, "this is data obtained at first stage in ResMenu");

      // .map(x => x.card): Assuming cards is an array, this map function iterates over each element (x) in the cards array and
      //  creates a new array containing only the card property of each element.

      // .find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY): This find method searches through the array of card objects and
      //  returns the first one where:

      // x is truthy (i.e., it exists and is not null or undefined).
      // The @type property of the card object is equal to RESTAURANT_TYPE_KEY.
      // This is likely filtering for a specific type of card, such as a restaurant.

      // .card?.info || null: Once the correct card object is found, it attempts to access its info property using optional chaining
      // again. If info exists, it will be returned. If not, the entire expression will return null.

      // initialize checkJsonData() function to check Swiggy Restaurant data
      const restaurantData =
        JSON?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;

      console.log(restaurantData, "this is res data from resmenupage");
      setResPageList(restaurantData);

      const menuData =
        JSON?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((x) => x.card?.card)
          .filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];
      console.log(menuData, "data after resmenudata");
      const uniqueMenuItems = [];
      const itemIds = new Set();

      menuData.forEach((item) => {
        if (!itemIds.has(item.id)) {
          itemIds.add(item.id);
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
      console.log(uniqueMenuItems, "this are unique menu items");
    } catch (error) {
      console.log("menu ka data uthane me hag diye");
    }
  };
     return(
         {resPageList,menuItems}
     );
};
export default useRestaurantMenu;