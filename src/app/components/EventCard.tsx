import { Button } from '@mui/material'
import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
export default async function EventCard(props:any) {
    const session = await getServerSession(options);

    const update=session?.user.role==="admin"?<Button href="/update/">update</Button>:null;
    return (
    <>
    <div className="w-56 h-80 text-sm text-center border-2 border-white rounded-lg ">
        <div className="flex justify-center items-center tracking-wider font-bold text-center p-2 m-1 h-20 uppercase ">
          {props.ename}
        </div>
        <div className=" text-center font-sans p-3 m-1 text-[#6adbdb]">
          <p className="p-1">{props.edetails.substr(0,50)+"..."}</p>
          <br />
          <p className="text-red-500">
            <span><EventAvailableIcon/>:</span>
            {props.lastdate}
          </p>
          <p className="text-green-500"><span><EventIcon/>:</span>{
            props.edate
          }</p>
          <div className=" flex justify-center items-center p-3 m-1">
          <Button href={`/a/${props._id}`}>APPLY</Button>
          {}
        </div>
        </div>
        
      </div>
    </>
  )
}
