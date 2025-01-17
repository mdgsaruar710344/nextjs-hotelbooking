
import { auth } from "@/auth";
import LogOut from "./LogOut";

const UserProfileInfo =async () => {

const session=await auth();

  return (
    <div>
        <div className='m-4'>
                {session?.user ? (<>         
          {session.user.email}
          <LogOut></LogOut> </>):'Please LogIn'}
                </div>   
    </div>
  );
};

export default UserProfileInfo;