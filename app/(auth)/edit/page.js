import { getHotelById } from "@/app/queries";


async function EditPage({searchParams}) {

  const hotelId=searchParams?.hotelId;
   const hotel= await getHotelById(hotelId);
  return (
    <div>
     Edit Page for hotel: {hotelId}
    </div>
  );
}

export default EditPage;