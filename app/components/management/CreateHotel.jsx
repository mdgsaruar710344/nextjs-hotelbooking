"use client"

import { handleImageUploadToApi } from "@/app/actions";
import Image from "next/image";
import { useState } from "react";



const CreateHotel = () => {

  const [editMode, setEditMode] = useState({
    propertyname:false,
    propertylocation:false,
  })
  const [imagePreview,setImagePreview]=useState({
    image1:'',
    image2:'',
    image3:'',
    image4:'',
    image5:''
  });
  const [imageFileLoad,setImageFileLoad]=useState({
    image1:null,
    image2:null,
    image3:null,
    image4:null,
    image5:null
  });

  const [formData, setFormData] = useState({
    propertyname: 'Property Name',
    propertylocation: 'Property Location'
  })

  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState({
    image1:'',
    image2:'',
    image3:'',
    image4:'',
    image5:'',
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
      console.log(name,value);
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleFormDataSave = (e) => {
   e.preventDefault();
   const {name}=e.target;
    setEditMode((prev)=>({
      ...prev,[name]: !prev[name]
    }));
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 const handleUpload = async (e) => {
    e.preventDefault();
   const buttonName= e.target.name;
    if (!file) return alert('Please select a file first!');


    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      const data = await response.json();
      setUploadedUrl((prev)=>({
        ...prev, [buttonName]:data.url
      })  );
      console.log('data from cloudinary',data.url);
    } catch (error) {
      console.error(error);
      alert('Error uploading file.');
    } 
  };
  



  return (
    <div>
     Hotel Creation section:
     <div className="max-w-7xl mx-auto px-6 py-8 relative">
      <button
        className="px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4"
      >
        <i className="fas fa-save mr-2"></i>
        Publish
      </button>
    
      <div className="mb-6">
      <form >
        {editMode.propertyname ? <div>
          <input 
          name="propertyname"
          type="text"
          value={formData.propertyname}
          onChange={handleOnChange}
          />
        </div> : <div>
        <h1 onClick={()=>{  setEditMode((prev)=>({
      ...prev, propertyname: true
    }))}}
          className="text-3xl font-bold mb-2 text-zinc-400 edit"
          id="propertyName"
        >
         {formData.propertyname}
        </h1>
        </div> }
    
        <button name="propertyname" onClick={handleFormDataSave} type="button"> {editMode.propertyname ? <>Save</> :<>Edit</> } </button>
        </form>
        <div className="flex items-center text-gray-600">
          {/* <span className="edit text-gray-600">Property location</span> */}

          <form >
        {editMode.propertylocation ? <div>
          <input 
          name="propertylocation"
          type="text"
          value={formData.propertylocation}
          onChange={handleOnChange}
          />
        </div> : <div>
        <h1 onClick={()=>{  setEditMode((prev)=>({
      ...prev, propertylocation: true
    }))}}
          className="text-3xl font-bold mb-2 text-zinc-400 edit"
          id="propertylocation"
        >
         {formData.propertylocation}
        </h1>
        </div> }
    
        <button name="propertylocation" onClick={handleFormDataSave} type="button"> {editMode.propertylocation ? <>Save</> :<>Edit</> } </button>
        </form>
        </div>
      </div>

     
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={ uploadedUrl.image1 ||"https://placehold.co/600x400/png"}
            alt="Main Room"
            className="w-full h-full object-cover rounded-lg"
            width={600}
            height={400}
          />
          
          <input
           
            type="file"
            accept="image/*"
            placeholder="Upload Image Here"
            onChange={handleFileChange}
            className="w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
          />
        <button  name="image1" onClick={handleUpload} >Upload This Photo</button>
          
        
        </div>
        <div className="relative">
          <Image
            src={uploadedUrl.image2 || "https://placehold.co/600x400/png"}
            alt="Room 1"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={150}
          />
          <input
             
             type="file"
             accept="image/*"
             placeholder="Upload Image Here"
             onChange={handleFileChange}
             className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
          />
           <button  name="image2" onClick={handleUpload} >Upload This Photo</button>
        </div>
        <div className="relative">
          <Image
            src={uploadedUrl.image3 || "https://placehold.co/600x400/png"}
            alt="Room 2"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={150}
          />
          <input
              
              type="file"
              accept="image/*"
              placeholder="Upload Image Here"
              onChange={handleFileChange}
            className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
          />
           <button  name="image3" onClick={handleUpload} >Upload This Photo</button>
        </div>
        <div className="relative">
          <Image
            src={uploadedUrl.image4 || "https://placehold.co/600x400/png"}
            alt="Room 3"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={150}
          />
          <input
              
              type="file"
              accept="image/*"
              placeholder="Upload Image Here"
              onChange={handleFileChange}
            className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
          />
           <button  name="image4" onClick={handleUpload} >Upload This Photo</button>
        </div>
        <div className="relative">
          <Image
            src={uploadedUrl.image5 || "https://placehold.co/600x400/png"}
            alt="Room 4"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={150}
          />
          <input
            
            type="file"
            accept="image/*"
            placeholder="Upload Image Here"
            onChange={handleFileChange}
            className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
          />
           <button  name="image5" onClick={handleUpload} >Upload This Photo</button>
        </div>
      </div>
     
      <div className="mb-4">
        <span className="text-xl font-bold edit">Price in USD</span>
        <span className="text-gray-600 ml-1">per night</span>
      </div>

      <div className="mb-4">
      
        <span className="edit">Available X rooms</span>
      </div>

     
      <div className="grid grid-cols-3 gap-8">
      
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <div className="grid grid-cols-1 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <i className="fas fa-person"></i>
                <span className="edit">How many Guest can Stay?</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-door-open"></i>
                <span className="edit">How many Bedrooms ? </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-bed"></i>
                <span className="edit">How many beds available ?</span>
              </div>
            </div>
          </div>

         
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="text-gray-700 leading-relaxed edit">
              Write a short description about this place
            </p>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4" id="amenities">
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-umbrella-beach"></i>
                <span>Beach access</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-person-swimming"></i>
                <span>Private pool</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-wifi"></i>
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-sink"></i>
                <span>Kitchen</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-square-parking"></i>
                <span>Free Parking</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-dumbbell"></i>
                <span>Fitness Center</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
    </div>
  );
};

export default CreateHotel;