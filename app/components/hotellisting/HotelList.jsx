

import { getAllHotels } from "@/app/queries";
import HotelCard from "./HotelCard";

const HotelList = async() => {

  const hotels= await getAllHotels();


  return (
    <div>
       {hotels?.length>0 ? (
        hotels.slice(0,7).map(hotel=><HotelCard key={hotel._id} hotel={hotel}  ></HotelCard>)
       ):('Sorry! No hotels available')}
    </div>
  );
};




export default HotelList;