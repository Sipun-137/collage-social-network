import Card from "../components/Card";
import JobCard from "../components/JobCard";


export default function page() {
  return (
    <div className="flex justify-center items-center text-center p-4 m-8 flex-col">
        <div>
            welcome to the job page 
            <p>where a job seeker can find the job for their future safety</p>
        </div>
        <div className="m-2">
            <JobCard/>
        </div>
    </div>
  )
}
