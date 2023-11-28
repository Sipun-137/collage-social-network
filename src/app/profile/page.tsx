import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";
import { Avatar, Typography } from "@mui/material";
import axios from "axios";


export default async function page() {
  
  const session = await getServerSession(options);
  const user = session?.user;


  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap p-6 m-4  ">
        <div className="w-auto sm:w-[20%] flex justify-center items-center p-4">
          <Avatar sx={{ width: 100, height: 100 }}/>
        </div>
        <div className="lg:grid lg:grid-cols-12 gap-3 sm:w-[80%] bg-gray-800 rounded-3xl">
          <div className="col-span-12 p-3 m-2 text-2x rounded-2xl uppercase bg-slate-500">
            <Typography>username:USER</Typography>
          </div>
          <div className="col-span-7 rounded-2xl p-3 m-2 bg-slate-500">
          <Typography>Email: {user?.email}</Typography>
          </div>
          <div className="col-span-5 row-start-2 p-3 uppercase rounded-2xl text-[#FFE6CD] m-2 bg-slate-500">
            <Typography>Role:{user?.role}</Typography>
          </div>
        </div>
      </div>
    </>
  );
}
