import { Button } from "@mui/material";
import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";
export default async function Card(props: any) {
  const session = await getServerSession(options);

  const update=session?.user.role==="admin"?<Button href="/update/">update</Button>:null;
  return (
    <>
      <div className="w-56 h-80 text-sm text-center border-2 border-white rounded-lg ">
        <div className=" flex justify-center items-center tracking-wider font-bold text-center h-1/3 p-2 m-1 uppercase text-2xl">
          {props.cname}
        </div>
        <div className="h-1/3 text-center font-sans uppercase p-3 m-1 text-[#6adbdb]">
          <p className="m-1">{props.title}</p>
          <p className="m-1">
            <span>salary: </span>
            {props.salary}
          </p>
          <p className="m-1">{props.duration}</p>
        </div>
        <div className="h-1/3 flex justify-center items-center p-3 m-1">
          <Button href={`/a/${props._id}`}>APPLY</Button>
          {update}
        </div>
      </div>
      
    </>
  );
}
