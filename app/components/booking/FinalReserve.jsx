"use client"
import { useEffect, useState } from "react";
import FinalReserveDate from "./FinalReserveDate";
import FinalReserveGuests from "./FinalReserveGuests";
import { useSearchParams } from "next/navigation";


const FinalReserve = () => {
 const searchParams= useSearchParams();


const [searchQuery,setSearchQuery]=useState({
  checkinTimeStamp:searchParams.get('checkin')||'',
  checkoutTimeStamp:searchParams.get('checkout')||'',
  guestsnumber:searchParams.get('guestsnumber')||''
})
useEffect(()=>{
  setSearchQuery({
    checkinTimeStamp: searchParams.get("checkin") || "",
    checkoutTimeStamp: searchParams.get("checkout") || "",
    guestsnumber: searchParams.get("guestsnumber") || "",
  });
},[searchParams])
  return (
    <div>
      Selected date Range:
      <br></br>
      Checkin: {searchQuery.checkinTimeStamp}
      <br></br>
      Checkout: {searchQuery.checkoutTimeStamp}
      <br></br>
      GuestsNumber: {searchQuery.guestsnumber}
        <FinalReserveDate></FinalReserveDate>    
        <FinalReserveGuests></FinalReserveGuests> 
    </div>
  );
};


export default FinalReserve;