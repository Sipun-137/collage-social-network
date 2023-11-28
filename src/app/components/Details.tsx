import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default async function Details(props: any) {
  const jsonobj = {
    id: props.id,
  };

  const applicantdata = await axios.post(
    "http://localhost:3000/api/applicant/id",
    jsonobj
  );
  console.log(applicantdata.data.applicant);
  const obj = applicantdata.data.applicant;

  return (
    <div>
      <div className="flex justify-center flex-col items-center p-8 m-8 text-black bg-white rounded-2xl">
        <Paper
          elevation={10}
          square={false}
          className="h-auto w-full p-4 text-center bg-[#efffed]"
        >
          <p className="text-xl font-bold">application id : : {props.id}</p>
          <div className="grid grid-cols-12 gap-4 text-start ">
            <div className="col-span-6 p-2"> Name</div>
            <div className="col-span-6 p-2">{obj.name}</div>
            <div className="col-span-6 p-2">{}</div>
            <div className="col-span-6 p-2">{obj.email}</div>
            <div className="col-span-6 p-2">phone no</div>
            <div className="col-span-6 p-2">{obj.phoneNumber}</div>
            <div className="col-span-6 p-2">address</div>
            <div className="col-span-6 p-2">
              <div className="grid grid-cols-2 text-start">
                <div className="col-span-1">address line 1</div>
                <div className="col-span-1">{obj.address.address}</div>
                <div className="col-span-1">city</div>
                <div className="col-span-1">{obj.address.city}</div>
                <div className="col-span-1">state</div>
                <div className="col-span-1">{obj.address.state}</div>
                <div className="col-span-1">country</div>
                <div className="col-span-1">{obj.address.country}</div>
                <div className="col-span-1">Pin Code</div>
                <div className="col-span-1">{obj.address.pincode}</div>
              </div>
            </div>
            <div className="col-span-6 p-2">10th</div>
            <div className="col-span-6 p-2">
              <div className="grid grid-cols-2">
                <div className="col-span-1">School Name</div>
                <div className="col-span-1">{obj.matric.schooln}</div>
                <div className="col-span-1">Passing Year</div>
                <div className="col-span-1">{obj.matric.year}</div>
                <div className="col-span-1">Board</div>
                <div className="col-span-1">{obj.matric.board}</div>
                <div className="col-span-1">percentage</div>
                <div className="col-span-1">{obj.matric.percentage}</div>
                <div className="col-span-1">School Address</div>
                <div className="col-span-1">{obj.matric.address}</div>
              </div>
            </div>
            <div className="col-span-6 p-2">12th/+2</div>
            <div className="col-span-6 p-2">
              <div className="grid grid-cols-2">
                <div className="col-span-1">Institute Name</div>
                <div className="col-span-1">{obj.hse.instname}</div>
                <div className="col-span-1">Passing Year</div>
                <div className="col-span-1">{obj.hse.year}</div>
                <div className="col-span-1">Board</div>
                <div className="col-span-1">{obj.hse.board}</div>
                <div className="col-span-1">percentage</div>
                <div className="col-span-1">{obj.hse.percentage}</div>
                <div className="col-span-1">Address</div>
                <div className="col-span-1">{obj.hse.address}</div>
              </div>
            </div>
            <div className="col-span-6 p-2">Current Education</div>
            <div className="col-span-6 p-2">
              <div className="grid grid-cols-2">
                <div className="col-span-1">Institute Name</div>
                <div className="col-span-1">{obj.curstudy.instname}</div>
                <div className="col-span-1">Passing Year</div>
                <div className="col-span-1">{obj.curstudy.passyear}</div>
                <div className="col-span-1">Address</div>
                <div className="col-span-1">{obj.curstudy.address}</div>
              </div>
            </div>
            <div className="col-span-6 p-2">skills</div>
            <div className="col-span-6 p-2">
              {obj.skills && obj.skills.map((item:string, index:number) => (
                <p key={index}>{item}</p>
                ))}
            </div>
            <div className="col-span-6 p-2">year of experience</div>
            <div className="col-span-6 p-2">{obj.yearofexp} year</div>
          </div>

         
          
          {/* this is the form like section where the recruiter can see the applicant details in full deatiled manner */}
        </Paper>
      </div>
    </div>
  );
}
