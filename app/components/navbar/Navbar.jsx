

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserState from './UserState';
import SearchResult from './SearchComponent';




const Navbar = async({fromAuth}) => {

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
     

      <div className="flex items-center space-x-4 relative justify-end">
        <button>
          <i className="fas fa-language text-zinc-700 text-xl"></i>
        </button>
        <button
          className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center"
        >
          <i className="fas fa-bars"></i>
          <span
            className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white"
          >
            <i className="fas fa-user text-white"></i>
          </span>
        </button>

    
        <div
          className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block"
        >
          <ul className="">
            <Link href={'/login'} className="w-full"> 
              <li
                className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
              >
                Login
              </li>
            </Link>

            <Link href={'/registration'} className="w-full"> 
              <li
                className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
              >
                Signup
              </li>
            </Link>

            <Link  href={'/help'} className="w-full">
              <li
                className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
              >
                Help
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;