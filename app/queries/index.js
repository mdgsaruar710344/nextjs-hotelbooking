
import { hotelsModel, usersModel } from "../models";


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

export async function getAllHotels() {
 
  try {  
      const hotels=await hotelsModel.find().lean();
       console.log('all hotels in queries',hotels)
       return hotels;   
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