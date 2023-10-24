import ACard from "@/app/components/ACard";
import axios from "axios";

export default async function Page() {
  const adata=await axios.get("http://localhost:3000/api/applicant/applied")
  console.log(adata)
  const applicantlist=adata.data.applicant
  console.log(applicantlist)

  return (
    <>
      <div className="text-center text-xl m-8 p-4">
        this is the page where the recruiter verify the applicant details and move futher steps for the employee selection
      </div>
      <div className="text-center flex flex-col gap-10 text-xl m-8 p-4 justify-center items-center">
            {
               applicantlist.map((item:any,index:number)=><ACard key={index} {...item}/>)
            }
            
      </div>
    </>
  );
}
