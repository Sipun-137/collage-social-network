import { Button } from "@mui/material";
import axios from "axios";

export default async function Page({ params }: { params: { id: string } }) {
  const rdata = await axios.post("http://localhost:3000/api/post/event/data", {
    params,
  });

  console.log(rdata.data);
  const temp = rdata.data;
  return (
    <>
      <div className="flex flex-col justify-center items-center m-8 p-4 bg-[#e0fcfd] text-black rounded-xl ">
        <h1 className="text-2xl text-center uppercase font-serif">
          <span>event name:</span>
          {temp.ename}
        </h1>
        <div className="flex flex-col gap-8">
          <p className="text-xl">
            <span>details : </span>
            {temp.edetails}
          </p>
          <p className="text-xl font-sans">
            date : {temp.edate}
          </p>
          <p className="text-xl font-sans">
            last date of application : {temp.lastdate}
          </p>
          <p className="text-xl font-sans">
            venue : {temp.evenue}
          </p>
        </div>
        <Button href={!temp.eurl?`/e/apply/${temp._id}`:temp.eurl} className="m-8 p-4">APPLY NOW</Button>
      </div>
    </>
  );
}
