"use client"

import { handleDeleteHotel } from "@/app/actions";

const RemoveHotel = ({hotel}) => {
  const hotelId=hotel?._id;
  const handleDeleteButton=async()=>{
    const isConfirmed= window.confirm('Delete this Hotel from your inventory??');
    if (isConfirmed) {
      try {
        console.log(`Deleting this hotel of Id: ${hotelId}`);
        const response=await handleDeleteHotel(hotelId);
        if (response?._id) {
          alert('Successfully deleted!');
          console.log('Response from Remove Action',response);
        } else {
          alert('Hotel Deletion Failed! Try again')
        }
   

      } catch (error) {
        console.error(error);
      }
     
    }
    else {
      console.log('You rejected to delete it')
    }
  }
  return (
    <div>
      <button onClick={handleDeleteButton}>Remove hotel</button>
    </div>
  );
};

export default RemoveHotel;