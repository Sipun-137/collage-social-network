"use client";
import { useState } from "react";
// import { nanoid } from "@reduxjs/toolkit";
import { Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Page() {
  const router = useRouter();
  const [input, setInput] = useState({
    ademail:"admin@gmail.com",
    cname: "",
    type:"",
    address: "",
    tnovacan: "",
    details: "",
    wtype: "",
    duration: "",
    title: "",
    enddate: "",
    joiningdt: "",
    skills: "",
    salary: "",
    eligibility: "",
  });
  const addPublishHandler = async () => {
    try {
      const response = await axios.post("/api/post/post", input);
      console.log(response);
      
      setInput({
        ademail:"admin@gmail.com",
        cname: "",
        type:"",
        address: "",
        tnovacan: "",
        details: "",
        wtype: "",
        duration: "",
        title: "",
        enddate: "",
        joiningdt: "",
        skills: "",
        salary: "",
        eligibility: "",
      });
      router.push("/job");
    } catch (error: any) {
      console.log("error in publishing!" + error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex tracking-[15px] justify-center items-center p-5 m-4 text-2xl text-white">
        register section
      </div>
      <div className="flex justify-center items-center pt-5 mt-10 ">
        <div className="rounded-lg p-4 bg-[#15111a] text-white h-screen grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              cname
            </label>
            <input
              type="text"
              name="title"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, cname: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              type
            </label>
            <input
              type="text"
              name="type"
              value={input.type}
              placeholder="job/internship"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, type: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              address
            </label>
            <input
              type="text"
              name="title"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, address: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              no of vacancies
            </label>
            <input
              type="text"
              name="tnovacan"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, tnovacan: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              details
            </label>
            <input
              type="text"
              name="details"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, details: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              work-type
            </label>
            <input
              type="text"
              name="wtype"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, wtype: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              duration
            </label>
            <input
              type="number"
              min="6"
              max="10"
              name="value"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, duration: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              title
            </label>
            <input
              type="text"
              name="title"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              enddate
            </label>
            <input
              type="date"
              name="enddate"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, enddate: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              paeges
            </label>
            <input
              type="date"
              name="joiningdt"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) =>
                setInput({ ...input, joiningdt: e.target.value })
              }
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              skills
            </label>
            <input
              type="text"
              name="skills"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, skills: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              salary
            </label>
            <input
              type="number"
              name="salary"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) => setInput({ ...input, salary: e.target.value })}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="pl-4 uppercase">
              eligibility
            </label>
            <input
              type="text"
              name="eligibility"
              className="bg-transparent w-full p-2 pl-4 m-2 rounded-3xl border-[#3b3b3b] border-2"
              onChange={(e) =>
                setInput({ ...input, eligibility: e.target.value })
              }
            />
          </div>
          <div className="col-span-12 flex justify-center items-center p-2">
            <button
              type="submit"
              onClick={addPublishHandler}
              className="bg-[#47ddff] px-8 py-2 uppercase rounded-3xl"
            >
              publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
