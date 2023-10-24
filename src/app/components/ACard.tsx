import { Button } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export default function ACard(props: any) {
  console.log(props);

  return (
    <>
      <div className="bg-[#e1fffd] h-52 m-8 p-4 text-black rounded grid grid-cols-12 min-w-full ">
        <div className="col-span-5 w-full text-start flex justify-center items-start flex-col gap-4">
          <div className="">
            <p>Applicant name: {props.name}</p>
          </div>
          <div>
            <p>Applicant email: {props.email}</p>
          </div>
          <div>
            <p><span>Year of Experience: </span>{props.yearofexp} years</p>
          </div>
        </div>
        <div className="col-span-5 w-full ">
          <div>
            skills
            <hr />
            <ul className="flex flex-wrap gap-4">
              {props.skills.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 min-w-full flex justify-center items-center">
            <Button href={`/a/verify/${props._id}`}>
                see application
            </Button> 
        </div>
      </div>
    </>
  );
}
