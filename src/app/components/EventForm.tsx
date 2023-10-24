"use client";
import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EventForm() {
    const router = useRouter();
  const [data, setData] = useState({
    ename: "",
    evenue: "",
    edetails: "",
    edate: "",
    lastdate: "",
    eurl: "",
  });
  const handleSubmit=async ()=>{
    console.log(data);
    const res=await axios.post("http://localhost:3000/api/post/event/cr",data);
    alert('Application Submitted');
    router.push("/internship");
  }
  return (
    <>
      <div className="text-white flex justify-center p-4 m-8  bg-[#eefbff] rounded-xl">
        <form action="" className="p-1 gap-6 w-4/5">
          <FormControl fullWidth className="p-3">
            <InputLabel htmlFor="ename">Name of the event</InputLabel>
            <Input
              id="ename"
              aria-describedby="fname-text"
              value={data.ename}
              onChange={(e) => setData({ ...data, ename: e.target.value })}
            />
            <FormHelperText id="fname-text">
              mention the event name
            </FormHelperText>
          </FormControl>
          <div className="flex justify-between items-center ">
            <FormControl fullWidth className="p-3">
              <InputLabel htmlFor="ename">Venue</InputLabel>
              <Input
                id="evenue"
                aria-describedby="evenue-text"
                value={data.evenue}
                onChange={(e) => setData({ ...data, evenue: e.target.value })}
              />
              <FormHelperText id="evenue-text">
                address of the venue where the event is going to be organized
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth className="p-3">
              <InputLabel htmlFor="edetail">Details</InputLabel>
              <Input
                id="edetail"
                aria-describedby="edetail-text"
                value={data.edetails}
                onChange={(e) => setData({ ...data, edetails: e.target.value })}
              />
              <FormHelperText id="fname-text">
                explain about the event in briefly
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center ">
            <FormControl fullWidth className="p-3">
              <InputLabel htmlFor="edate">event date</InputLabel>
              <Input
                id="edate"
                aria-describedby="fname-text"
                value={data.edate}
                onChange={(e) => setData({ ...data, edate: e.target.value })}
              />
              <FormHelperText id="fname-text">date of the event</FormHelperText>
            </FormControl>
            <FormControl fullWidth className="p-3">
              <InputLabel htmlFor="lastdate">event date</InputLabel>
              <Input
                id="lastdate"
                aria-describedby="ldate-text"
                value={data.lastdate}
                onChange={(e) => setData({ ...data, lastdate: e.target.value })}
              />
              <FormHelperText id="ldate-text">
                last date of the application of the event
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center ">
            <FormControl fullWidth className="p-3">
              <InputLabel htmlFor="eventurl">event url</InputLabel>
              <Input
                id="eventurl"
                aria-describedby="url-text"
                value={data.eurl}
                onChange={(e) => setData({ ...data, eurl: e.target.value })}
              />
              <FormHelperText id="url-text">
                provide url for the application form for the event 
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-end p-2 m-2">
            <Button  onClick={handleSubmit}> Publish Event</Button>
          </div>
        </form>
      </div>
    </>
  );
}
