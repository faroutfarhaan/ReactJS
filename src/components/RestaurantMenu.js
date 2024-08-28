import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import useRestaurantMenu from "./utils/Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const resId = useParams();
  const {resPageList , menuItems} = useRestaurantMenu(resId);

  if (resPageList === 0) return Shimmer;
  return (
    <>
      <div>
        <h2>{resPageList?.name} </h2>
        <p>
          ⭐{resPageList?.avgRatingString}({resPageList?.totalRatingsString}), {resPageList?.costForTwoMessage}
        </p>
        <p>  {resPageList?.cuisines?.join(", ") }</p>
        <p><strong>Outlet</strong> {resPageList?.areaName}</p>
        <p>{resPageList?.sla?.slaString}</p>
        <p>{resPageList?.sla?.lastMileTravel}kms | Delivery charges: {resPageList?.feeDetails?.totalFee/100} </p>
      </div>
    </>
  );
};
export default RestaurantMenu;
