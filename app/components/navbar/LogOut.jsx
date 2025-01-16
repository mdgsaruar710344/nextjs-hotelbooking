"use client"

import { handleSignOut } from "@/app/actions";

const LogOut = () => {
  const handleLogOut=async()=>{
await handleSignOut();
  }
  return (
    <div>
         
     
                <button onClick={handleLogOut} >LogOut</button>
       
         
                
    </div>
  );
};

export default LogOut;