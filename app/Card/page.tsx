import React from "react";
import Image from "next/image";
import kkt from "../../public/kamran khan tessori.jpeg";
import logo from "../../public/logo.jpeg";

interface IdCardProps {
  name: string;
  rollNo: string;
  city: string;

  schedule: string;
  profileImage: string;
}
function IdCard(props: IdCardProps) {
  return (
    <div className="mt-5 ml-5  min-h-screen">
      <div className="bg-slate-200 p-6 rounded-xl shadow-lg max-w-2xl flex items-center justify-center border-4 border-sky-300 relative">
        
        
        <Image
          src={kkt}
          alt="background Image"
          width={400}
          height={400}
          objectFit="cover"
          className="opacity-10 absolute"
        />

        {/* left section */}

        <div className="w-2/3 pr-4  ">
          {/* logo section */}
          <Image src={logo} alt="logo" className="mb-5 w-16 h-18 " />

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Name:</span>
            <span className="text-black">{props.name}</span>
          </p>

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Roll No:</span>
            <span className="text-black">{props.rollNo}</span>
          </p>

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Distance Learning:</span>
            <span className="text-black">No</span>
          </p>
          <p className="mb-2">
            <span className="text-sky-500 font-bold">City:</span>
            <span className="text-black">{props.city}</span>
          </p>

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Centre:</span>
            <span className="text-black">Governor House Karachi</span>
          </p>

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Campus:</span>
            <span className="text-black">Main</span>
          </p>

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Day/Time:</span>
            <span className="text-black">{props.schedule}</span>
          </p>

          <p className="mb-2">
            <span className="text-sky-500 font-bold">Batch:</span>
             <span className="text-black">1</span>
          </p>

          {/* button section */}
          
            <div className="relative  p-1 rounded-lg border border-grey-300 bg-blue-900 text-white ">
              <span
                className="absolute inset-0 rounded-l-lg bg-slate-500  w-[50%]">
              </span>
             
              <span className="relative left-36 ">Q1 & WMD</span>
            </div>
          
        </div>
        {/* right section */}
        <div className="w-1/3 text-center relative ">
          <Image
            src={props.profileImage}
            alt="profile pic"
            width={500}
            height={500}
            className="rounded-lg mb-6  "
          />
          <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 text-2xl">
            Authorized signature
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
