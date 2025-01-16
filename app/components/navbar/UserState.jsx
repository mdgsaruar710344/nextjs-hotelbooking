import { handleSignOut } from '@/app/actions';
import { auth } from '@/auth';
import React from 'react';
import LogOut from './LogOut';


const UserState = async() => {
   const session=await auth();
    const user=session?.user;
  console.log('User in UserState:',user)
  return (
    <div>
      <div className='m-4'>
                {user ? (<>         
          {user.email}
          <LogOut></LogOut> </>):'Please LogIn'}
                </div>            
    </div>
  );
};

export default UserState;