import CreateHotel from '@/app/components/management/CreateHotel';
import HotelManageCard from '@/app/components/management/HotelManageCard';
import { getAllHotelsByOwnerId, getUserByEmail } from '@/app/queries';
import { auth } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';


async function ProfilePage() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect('/login');
  }
  else {
    const userFromDB = await getUserByEmail(user?.email);
    const ownerId = userFromDB?._id;
    const ownedHotels = await getAllHotelsByOwnerId(ownerId);
    return (
      <div>
       <Link href={'/create'}>Create Hotel</Link>
        <br></br>
        All hotels managed by me are here:
        <br></br>
        {ownedHotels?.length > 0 ? ownedHotels.map(hotel => <HotelManageCard key={hotel._id} hotel={hotel} ></HotelManageCard>) : <>No hotels owned by You at this moment</>}
      </div>
    );
  }

}

export default ProfilePage