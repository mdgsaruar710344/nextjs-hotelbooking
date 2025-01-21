import HotelCard from '../hotellisting/HotelCard';
import EditHotel from './EditHotel';
import RemoveHotel from './RemoveHotel';

const HotelManageCard = ({hotel}) => {
  return (
    <div className='border-red-700 border-2'>
      <HotelCard hotel={hotel} ></HotelCard>
      <br></br>
      <EditHotel></EditHotel>
      <br></br>
      <RemoveHotel></RemoveHotel>
    </div>
  );
};

export default HotelManageCard;