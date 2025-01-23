
import { bookingsModel, hotelsModel, usersModel } from "../models";


export async function getAllUsers() {
  try {
    const users=await usersModel.find().lean();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
}
export async function getUserByEmail(email) {
  try {
    const user=await usersModel.findOne({email:email}).lean();
    console.log('user in query by email',user);
    return user;
  } catch (error) {
    console.error(error);
  }
}
export async function getUserByID(userId) {
  try {
    const user=await usersModel.findById(userId).lean();
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllHotels(searchTerm) {
 
  try {  
    if (searchTerm) {
      const hotels=await hotelsModel.find({ city: { $regex: searchTerm, $options: "i" } }).lean();
      console.log('all hotels in queries',hotels)
      return hotels;
    }
     else {
      const hotels=await hotelsModel.find().lean();
      console.log('all hotels in queries',hotels)
      return hotels;
     }  
     }
      catch (error) {
    console.error(error);
  }
}

export async function getHotelById(hotelID) {
  try {
    const hotel=await hotelsModel.findById(hotelID).lean();
    // console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}
export async function deleteHotelById(hotelID) {
  try {
    const hotel=await hotelsModel.findByIdAndDelete(hotelID).lean();
    // console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}
export async function getBookingById(bookingId) {
  try {
    const booking=await bookingsModel.findById(bookingId).lean();
    // console.log(hotel);
    return booking;
  } catch (error) {
    console.error(error);
  }
}
export async function getAllBookingByUserId(userId) {
  try {
    
    const bookings=await bookingsModel.find({
      userId:userId
    }).lean();
    // console.log(hotel);
    return bookings;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllHotelsByOwnerId(ownerId) {
  try {
    const hotels= await hotelsModel.find({
      ownerId:ownerId
    }).lean();
    return hotels;
  } catch (error) {
    console.error(error);
  }

}