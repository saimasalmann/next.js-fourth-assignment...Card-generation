import React from "react";
import IdCard from "./Card/page";

function Home() {
  return (
    <>
      <IdCard
        name="Fatima "
        rollNo="00001"
        city="Hyderabad"
        schedule="Wednesday: 10:00 AM - 01:00 PM"
        profileImage="/pic-1.png"
      />

      <IdCard
        name="Sehar khan"
        rollNo="00002"
        city="Mirpur khas"
        schedule="Tuesday: 03:00 PM - 06:00 PM"
        profileImage="/pic-3.jpeg"
      />

      <IdCard
        name="Nida Bano"
        rollNo="00003"
        city="Karachi"
        schedule="Monday: 02:00 PM - 05:00 PM"
        profileImage="/avatar.jpeg"
      />
      <IdCard
        name="Sadia"
        rollNo="00004"
        city="Karachi"
        schedule="Friday: 02:00 PM - 05:00 PM"
        profileImage="/pic-4.jpeg"
      />
      <IdCard
        name="Asad-Ullah"
        rollNo="00005"
        city="KNawabshah"
        schedule="Saturday: 07:00 PM - 10:00 PM"
        profileImage="/pic-5.png"
      />
      

    </>
  );
}

export default Home;
