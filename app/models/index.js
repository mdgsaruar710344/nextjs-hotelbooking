import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const usersSchema= new Schema({
        name:{
          type:String,
          required:true
        },
        email:{
          type:String,
          required:true,
          unique:true
        },
        password:{
          type:String,
          required:true
        },
        image:{
          type:String,
          required:false
        },
});
// const reviewsSchema= new Schema({
//         hotelId:{
//           type: ObjectId,
//           required:true
//         },
//         userId:{
//           type:ObjectId,
//           required:true,  
//         },
//         review:{
//           type:String,
//           required:true
//         },     
// });

// const ratingsSchema= new Schema({
//         hotelId:{
//           type:ObjectId,
//           required:true
//         },
//         userId:{
//           type:ObjectId,
//           required:true,  
//         },
//         rating:{
//           type:Number,
//           required:true
//         },     
// });
const bookingsSchema= new Schema({
        hotelId:{
          type:ObjectId,
          required:true
        },
        userId:{
          type:ObjectId,
          required:true,  
        },
        checkin:{
          type:Number,
          required:true
        },     
        checkout:{
          type:Number,
          required:true
        },     
        guestsnumber:{
          type:Number,
          required:true
        },     
        totalPayment:{
          type:Number,
          required:true
        },     
});
const amenitiesSchema= new Schema({
        name:{
          type:String,
          required:true
        },
        price:{
          type:Number,
          required:true,  
        },
        instructions:{
          type:String,
          required:true
        },     
        hours:{
          type:String,
          required:true
        },     
});

const locationSchema= new Schema({
  latitude:{
    type:Number,
    required:true
  },
  longitude:{
    type:Number,
    required:true
  }
});



const hotelsSchema= new Schema({
  name: {
    type:String,
    required:true
  },
  address1: {
    type:String,
    required:true
  },
  airportCode: {
    type:String,
    required:true
  },
  city: {
    type:String,
    required:true
  },
  countryCode: {
    type:String,
    required:true
  },
  highRate: {
    type:Number,
    required:true
  },
  location: {
   type: locationSchema,
   required:true,
  },
  locationDescription: {
    type:String,
    required:true
  },
  lowRate: {
    type:Number,
    required:true
  },
  postalCode: {
    type:Number,
    required:true
  },
  propertyCategory: {
    type:String,
    required:true
  },
   shortDescription: {
    type:String,
    required:true
  },
   stateProvinceCode: {
    type:String,
    required:true
  },
   thumbNailUrl: {
    type:String,
    required:true
  },
   gallery: {
    type:Array,
    required:true
  },
   overview: {
    type:String,
    required:true
  },
   amenities: [{
    type:ObjectId,
    ref:'amenitiesModel'
  }]

});

export const usersModel= mongoose.models.users ?? mongoose.model("users",usersSchema);
export const hotelsModel= mongoose.models.hotels ?? mongoose.model("hotels",hotelsSchema);
// export const reviewsModel= mongoose.models.reviews ?? mongoose.model("reviews",reviewsSchema);
// export const ratingsModel= mongoose.models.ratings ?? mongoose.model("ratings",ratingsSchema);
export const bookingsModel= mongoose.models.bookings ?? mongoose.model("bookings",bookingsSchema);
export const amenitiesModel= mongoose.models.amenities ?? mongoose.model("amenities",amenitiesSchema);