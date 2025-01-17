import HotelDetails from "@/app/components/hotellisting/HotelDetails";
import { getHotelById } from "@/app/queries";

const HotelDetailsPage=async({params})=> {
  const hotelID=params?.hotelid;
const hotel= await getHotelById(hotelID);
  return (
    <div>
      Hotel Details Page
      {hotel?._id && <HotelDetails  hotel={hotel} ></HotelDetails>}
    </div>
  );
}

export default HotelDetailsPage;