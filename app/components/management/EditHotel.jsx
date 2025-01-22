"use client"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const EditHotel = ({hotel}) => {
  const router=useRouter();
  const hotelId= hotel?._id;
  const handleEditButton=()=>{
router.push(`/edit?hotelId=${hotelId}`);
  }
  return (
    <div>
      <button onClick={handleEditButton}>Edit</button>
    </div>
  );
};

export default EditHotel;