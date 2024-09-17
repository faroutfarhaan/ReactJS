 import { IMG_CDN_URL } from "./utils/constants";
 import restaurantList from "./utils/constants" 
 const RestaurantCard= ({
    name,cloudinaryImageId,cuisines , avgRating, costForTwo,sla , areaName
}) => {
    
    return (
     <div className="bg-blue-50 rounded-xl p-2 m-1 w-[270px] hover:bg-blue-300">
      <img className="cardImg rounded-xl" src={IMG_CDN_URL+cloudinaryImageId} alt="not rendered yet"/>
      <h2 className="font-bold font-sans py-2 truncate">{name}</h2>
     <h3>{avgRating}⭐ | {costForTwo ?? "₹400 for two."}</h3> 
      <p className="font-light font-serif truncate">{cuisines.join(", ")}</p>
      <p>{areaName} | {sla?.lastMileTravelString ?? "2.0 km"}</p>
     
     
       
     </div>
    )
};

export default RestaurantCard;