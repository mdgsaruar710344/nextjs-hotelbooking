
"use client"
import React, { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function FinalReserveDateOptions() {
    const searchParams= useSearchParams();
   const params= useParams();
   const hotelid=params?.hotelid;
  const router=useRouter();
  const [formData, setFormData] = useState({
    checkin: null,
    checkout: null,
  });

  const [showcheckinPicker, setShowcheckinPicker] = useState(false);
  const [showcheckoutPicker, setShowcheckoutPicker] = useState(false);
  const [error,setError]=useState('');


  const handleDateChange = (name, date) => {
    setError('')
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const togglecheckinPicker = () => setShowcheckinPicker((prev) => !prev);
  const togglecheckoutPicker = () => setShowcheckoutPicker((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Currentparams= new URLSearchParams(searchParams);
    const currentTimeStamp= Date.now();
    const checkinTimeStamp=formData.checkin.getTime();
    const checkoutTimeStamp=formData.checkout.getTime();
  
    if (checkinTimeStamp>checkoutTimeStamp || checkinTimeStamp< currentTimeStamp) {
      setError('Select Checkout date carefully')
    }
    else {
      console.log("Form Data:", formData);
      if (checkinTimeStamp && checkoutTimeStamp) {
        // Add individual parameters
      
        Currentparams.set('checkin', checkinTimeStamp);
        Currentparams.set('checkout', checkoutTimeStamp);
      
      } 
      
      // Update the router with the modified params
      router.replace(`/payment?${Currentparams.toString()}`);
      
        }
    }

  

  return (
    <>
    <form onSubmit={handleSubmit}>
      
 
      <div style={{ position: "relative" }}>
        <label>
          Start Date:
          <input
            type="text"
            value={
              formData.checkin
                ? formData.checkin.toLocaleDateString()
                : "Select a date"
            }
            readOnly
            onClick={togglecheckinPicker}
            style={{ cursor: "pointer" }}
          />
        </label>
        {showcheckinPicker && (
          <div style={{ position: "absolute", zIndex: 10, background: "white" }}>
            <DayPicker
              mode="single"
              selected={formData.checkin}
              onSelect={(date) => {
                handleDateChange("checkin", date);
                setShowcheckinPicker(false); // Close after selecting
              }}
            />
          </div>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <label>
          End Date:
          <input
            type="text"
            value={
              formData.checkout
                ? formData.checkout.toLocaleDateString()
                : "Select a date"
            }
            readOnly
            onClick={togglecheckoutPicker}
            style={{ cursor: "pointer" }}
          />
        </label>
        {showcheckoutPicker && (
          <div style={{ position: "absolute", zIndex: 10, background: "white" }}>
            <DayPicker
              mode="single"
              selected={formData.checkout}
              onSelect={(date) => {
                handleDateChange("checkout", date);
                setShowcheckoutPicker(false); // Close after selecting
              }}
            />
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
    {error && error}
    </>
  );
}
