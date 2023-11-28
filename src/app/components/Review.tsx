"use client";

import { Button } from "@mui/material";
import axios from "axios";

export default function Review(props: any) {
  const updatequery = { status: "approve", id: props.id };
  const declinequery = { status: "declined",id:props.id };
  const handleUpdate = async () => {
    console.log(`the application is approved ${props.id}`);
    await axios.put("http://localhost:3000/api/applicant/id", updatequery);
  };
  const handleDecline = async () => {
    console.log(`the application is declined ${props.id}`);
    await axios.put("http://localhost:3000/api/applicant/id", declinequery);
  };
  return (
    <div className="flex justify-between items-center my-4 mx-20 p-4  ">
      <Button onClick={handleDecline} variant="outlined" color="error">
        Decline
      </Button>
      <Button onClick={handleUpdate} variant="outlined" color="success">
        Approve
      </Button>
    </div>
  );
}
