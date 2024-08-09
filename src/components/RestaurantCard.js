 import { IMG_CDN_URL } from "./constants";
 import restaurantList from "./constants" 
 const RestaurantCard= ({
    name,cloudinaryImageId,cuisines , avgRating, costForTwo,sla , areaName
}) => {
    
    return (
     <div className="card">
      <img className="cardImg" src={IMG_CDN_URL+cloudinaryImageId} alt="not rendered yet"/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
     <h3>{avgRating}⭐</h3> 
      <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
      <h3>{costForTwo ?? "₹400 for two."}</h3>
       
     </div>
    )
};

export default RestaurantCard;