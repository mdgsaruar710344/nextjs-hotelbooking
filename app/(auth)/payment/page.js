import FinalReserve from "@/app/components/booking/FinalReserve";
import OrderPrice from "@/app/components/booking/OrderPrice";
import PaymentInfo from "@/app/components/booking/PaymentInfo";
import HotelCard from "@/app/components/hotellisting/HotelCard";
import { getHotelById } from "@/app/queries";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PaymentProcessPage({searchParams}) {
  const hotelID=searchParams?.hotelid;
 const hotel= await getHotelById(hotelID);
 console.log(hotel);
  const session=await auth();
  const user=session?.user;
    if (!session) {
    redirect('/login')
  }
  else {
    return (

      <div>
        Payment Page:
       <FinalReserve></FinalReserve>
        <HotelCard hotel={hotel} ></HotelCard>
        <OrderPrice hotel={hotel} ></OrderPrice>
        <PaymentInfo hotel={hotel} user={user} ></PaymentInfo>
      </div>
    );
  }

}

