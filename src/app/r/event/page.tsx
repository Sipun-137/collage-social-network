import EventForm from "@/app/components/EventForm";
import React from "react";

export default function page() {
  return (
    <>
    <div>
      <p className="p-4 m-4 text-center uppercase tracking-[5px] font-mono">this is the event publishing page for the admin or employee or staff</p> 
      <EventForm/>
    </div>
    </>
  );
}
