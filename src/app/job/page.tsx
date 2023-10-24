import axios from "axios";
import Card from "../components/Card";


export default async function page() {
  const data=await axios.get("http://localhost:3000/api/post/job")
  const joblist=data.data
  return (
    <div className="flex justify-center items-center text-center p-4 m-8 flex-col">
        <div>
            welcome to the job page 
            <p>where a job seeker can find the job for their future safety</p>
        </div>
        <div className="m-2 min-h-[70vh]">
          {
            joblist.length!==0?(joblist.map((item:any,index:number)=><Card key={index} {...item}/>)):"No Job Openings now Please visit after some moment."
          }
        </div>
    </div>
  )
}
