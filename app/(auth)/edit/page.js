import CreateHotel from "@/app/components/management/CreateHotel";
import { getHotelById } from "@/app/queries";


async function EditPage({searchParams}) {

  const hotelId=searchParams?.hotelId;
   const hotel= await getHotelById(hotelId);
   console.log(hotel);
  return (
    <div>
     Edit Page for hotel: {hotelId}
     <CreateHotel hotel={hotel} edit={true} ></CreateHotel>
    </div>
  );
}

export default EditPage;