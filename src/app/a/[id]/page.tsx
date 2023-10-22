import { options } from "@/app/api/auth/[...nextauth]/option";
import { Button } from "@mui/material";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const obj = await axios.post("http://localhost:3000/api/post/data", {
    params,
  });
  console.log(obj.data);
  const data = obj.data;
  return (
    <div className="text-center h-screen m-2">
      <div className="flex justify-start p-5 m-8">{data.title}</div>
      <div className="grid grid-cols-12 grid-rows-5 gap-4 min-h-[60vh] m-8 bg-slate-500 rounded-xl">
        <div className="col-span-3 row-span-5 min-h-full bg-transparent flex flex-col justify-center items center gap-5 ">
          <div className="h-[90%] flex flex-col justify-center bg-[#b2e1d3] text-[#2b2828] gap-y-8 m-3 p-4 uppercase  rounded-lg font-semibold ">
            <span className="font-serif">organization name</span>
            <p className="font-serif text-xl">{data.cname}</p>
            <p className="font-serif text-sm">{data.address}</p>
          </div>
        </div>
        <div className="col-span-6 row-span-5 col-start-4 min-h-full bg-transparent flex flex-col justify-center items-center gap-2 p-3">
          <div className="bg-[#b2e1d3] rounded-lg font-sans h-full w-full flex flex-col justify-start items-start p-4 text-[#2b2828] gap-3">
            <p>
              <span>salary : </span>
              ₹:{data.salary}
            </p>
            <p>
              <span>no of vacancies : </span>
              {data.tnovacan}
            </p>
            <p>
              <span>Duration : </span>
              {data.duration}
            </p>
            <p>
              <span>Job Type: </span>
              {data.wtype}
            </p>
            <p>
              <span>last date of apply: </span>
              {data.enddate}
            </p>

            <p>
              <span>Joining Date : </span>
              {data.joiningdt}
            </p>
            <p>
              <span>eligibility: </span>
              {data.eligibility}
            </p>
            <div className="flex justify-center items-start">
              <span>skills: </span>
              <div className="flex justify-start items-start text-start m-3">
              <ol >
                {data.skills.map((item:string, index:number) => <li key={index}>⁕{item}</li>)}
              </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-5 col-start-10 min-h-full bg-transparent flex flex-col justify-center p-2 ">
          <div className="bg-[#b2e1d3] rounded-lg font-sans h-[75%] w-full p-2">
            <p className="uppercase text-xl text-black">details</p>
            <p className=" text-black">{data.details}</p>
          </div>
          <div>
            <Button className="m-5 text-black bg-blue-500 hover:border-2 hover:text-green-500" href={`/a/apply/${id}`}>APPLY NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
