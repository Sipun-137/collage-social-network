import React from "react";
import EventCard from "../components/EventCard";
import axios from "axios";



export default async function page() {
  const data=await axios.get("http://localhost:3000/api/post/event/cr")
  const event=data.data
  return (
    <div className="flex justify-center flex-col items-center text-center m-4 p-8 h-screen">
      <div className="tracking-[10px] text-xl font-mono text-white ">
        event page for the site
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center p-4 m-8">
        {
          event.map((event:any,index:Number)=> <EventCard key={index} {...event} />)
        } 
      </div>
      <div className="text-white">
        <p>event card</p>
        <p>card contains name of the event </p>
        <p>summery details of 100</p>
        <p>event date</p>
        <p></p>
      </div>
    </div>
  );
}
