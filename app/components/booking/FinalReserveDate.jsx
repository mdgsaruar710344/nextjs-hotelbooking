"use client"
import React, { useState } from 'react';
import FinalReserveDateOptions from './FinalReserveDateOptions';

const FinalReserveDate = () => {
 const [editOpen,setEditOpen]= useState(false);
  return (
    <div>
        

      <button onClick={()=>{setEditOpen(!editOpen)}} className='underline'>{editOpen ?<>Save</> :<>Edit</>} </button>
      <br></br>
      {editOpen && <FinalReserveDateOptions></FinalReserveDateOptions> }
    </div>
  );
};

export default FinalReserveDate;