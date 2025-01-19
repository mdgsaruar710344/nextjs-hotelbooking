"use client"
import React, { useState } from 'react';
import FinalReserveGuestsOptions from './FinalReserveGuestsOptions';

const FinalReserveGuests = () => {
  const [editOpen,setEditOpen]=useState(false)
  return (
    <div>
           <button onClick={()=>{setEditOpen(!editOpen)}} className='underline'>{editOpen ?<>Save</> :<>Edit</>} </button>
              <br></br>
              {editOpen && <FinalReserveGuestsOptions></FinalReserveGuestsOptions> }

    </div>
  );
};

export default FinalReserveGuests;