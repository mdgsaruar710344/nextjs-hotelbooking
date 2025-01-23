

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserState from './UserState';
import SearchResult from './SearchComponent';
import { auth } from '@/auth';
import LogOut from './LogOut';





const Navbar = async({fromAuth}) => {
  const session=await auth();
  const user=session?.user;
const barMenuNotLogged=  <>
                  <li><Link href={'/login'}>Log In</Link> </li>
                  <li><Link href={'/registration'}>Sign Up</Link></li>
                </> 
const barMenuLogged=  <>
                  <li><Link href={'/bookings'}>Bookings</Link> </li>
                  <li><Link href={'/profile'}>Profile</Link></li>
                  <li> <LogOut></LogOut> </li>
                </> 
  //  const session=await auth();
  //   const Loggeduser=session?.user;
 
  return (
    <div>
   
        <nav
      className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20"
    >
      <div className="flex items-center">
        <Link href={'/'} >
          <Image src="/assets/logo.svg" alt="Hotel Logo" className="h-8 w-auto" height={50} width={50} />
        </Link>
      </div>

<SearchResult></SearchResult>

      {/* {Loggeduser ? Loggeduser.name: 'no Loggeduser'}
      {Loggeduser ? Loggeduser.email: 'no email'} */}
      
      {fromAuth && <UserState ></UserState> }
     
        <details className="dropdown">
          <summary className="btn m-1">Menu</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
         {user ? barMenuLogged : barMenuNotLogged}
          </ul>
        </details>
     
    </nav>
    {/* <NavbarMenu></NavbarMenu> */}
    </div>
  );
};

export default Navbar;