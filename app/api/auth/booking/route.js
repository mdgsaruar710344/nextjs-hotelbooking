import { bookingsModel } from "@/app/models";
import { NextResponse } from "next/server";

export async function POST(request){
const bookingsData=await request.json();
try {
  const createdBooking=await bookingsModel.create({
    hotelId:bookingsData.hotelId,
    userId:bookingsData.userId,
    checkin:bookingsData.checkinTimestamp,
    checkout:bookingsData.checkoutTimestamp,
    guestsnumber:bookingsData.guestsnumber,
    totalPayment:bookingsData.totalPayment,
    });
    console.log('Created booking from database',createdBooking);

  return NextResponse.json({
    message:'Bookings created successfully',
    data:createdBooking
  },
{
  status:201
})

  } catch (error) {
  console.error(error);
}




}