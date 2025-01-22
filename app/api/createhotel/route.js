

import { hotelsModel } from "@/app/models";
import { NextResponse } from "next/server";

export async function POST(request) {
  const finalObject = await request.json();
  // const session = await auth();
  // const email = session?.user?.email;
  // console.log('email of session user',email);
  // const user = await getUserByEmail(email);
  // console.log('user from db in API ',user);
  // const userId = user?._id;
  // console.log('userId in API',userId);
  const locationObject = {
    latitude: 99.123456,
    longitude: 24.123456,
  };
  const thumbNail = finalObject?.imageUrl[0];

  const finalModifiedObject = {
    ...finalObject,
    location: locationObject,
    // ownerId: userId,
    thumbNailUrl: thumbNail,
  }
  const { propertyname, propertylocation, pricepernight, guestcapacity, bedroomnumber, bednumber, description, amenitiesarray, imageUrl, location, ownerId, thumbNailUrl } = finalModifiedObject || {};
  console.log('FinalModifiedObject in route before sending to Database', finalModifiedObject);
  try {
    const createdHotel = await hotelsModel.create({
      name: propertyname,
      address1: propertylocation,
      airportCode: propertylocation,
      city: propertylocation,
      countryCode: propertylocation,
      highRate: pricepernight,
      location: location,
      locationDescription: propertylocation,
      lowRate: pricepernight,
      postalCode: 1000,
      propertyCategory: '1',
      shortDescription: description,
      stateProvinceCode: propertylocation,
      thumbNailUrl: thumbNailUrl,
      ownerId:ownerId,
      gallery: imageUrl,
      amenities: amenitiesarray,
      overview: description,
      guestcapacity:guestcapacity,
      bedroomnumber:bedroomnumber,
      bednumber:bednumber,
    });
    return NextResponse.json({
      data: createdHotel,
      message: 'Successfully created Hotel in Databse'
    },
  {status:201})
  } catch (error) {
    console.error(error);
   return NextResponse.json({
    message:'Hotel Creation failed'
   },{
    status:500,
   })
  }


}