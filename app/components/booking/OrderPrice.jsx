"use client"

import { getDateDifferenceFromTimestamps } from "@/app/utils/utils";
import { useSearchParams } from "next/navigation";

const OrderPrice = ({hotel}) => {
const searchParams=useSearchParams();
const checkinTimeStamp=searchParams?.get('checkin')
const checkoutTimeStamp=searchParams?.get('checkout')
const days= getDateDifferenceFromTimestamps(checkinTimeStamp,checkoutTimeStamp);
const ratePerDay= hotel?.lowRate;  
const totalReserveCost= (days*ratePerDay);
const fees= 9.99;
const totalPayment= totalReserveCost+fees;
return (
    <div>
      Cost per day :  ${ratePerDay && ratePerDay}
      <br></br>
      Days: {days && days}
      <br></br>
      Total Reserve Cost: ${totalReserveCost && totalReserveCost}
      <br></br>
      Fees: ${fees}
      <br></br>
      TotalPayment: ${totalPayment && totalPayment};
    </div>
  );
};

export default OrderPrice;