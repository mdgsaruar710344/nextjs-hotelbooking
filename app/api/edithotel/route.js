import { hotelsModel } from "@/app/models";
import { NextResponse } from "next/server";

export async function POST(request) {
  const finalObject = await request.json();
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
  const { propertyname, propertylocation, pricepernight, guestcapacity, bedroomnumber, bednumber, description, amenitiesarray, imageUrl, location, ownerId, thumbNailUrl,hotelId } = finalModifiedObject || {};
  console.log('FinalModifiedObject in route before sending to Database', finalModifiedObject);
  try {
    const createdHotel = await hotelsModel.findOneAndUpdate({
      _id:hotelId
    },{
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
      ownerId: ownerId,
      gallery: imageUrl,
      amenities: amenitiesarray,
      overview: description,
      guestcapacity: guestcapacity,
      bedroomnumber: bedroomnumber,
      bednumber: bednumber,
    },{
      new:true,
    });
    return NextResponse.json({
      data: createdHotel,
      message: 'Successfully updated Hotel in Databse'
    },
      { status: 201 })
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: 'Hotel updation failed'
    }, {
      status: 500,
    })
  }
}