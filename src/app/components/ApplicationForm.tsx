"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function ApplicationForm(props: any) {
  const router = useRouter();
  console.log(props.id);
  console.log(props.email);
  const [skill, setskill] = useState<string[]>([]);
  
  const [addobj, setAddobj] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [matobj, setmatobj] = useState({
    schooln: "",
    year: "",
    board: "",
    percentage: "",
    address: "",
  });
  const [hscobj, sethsc] = useState({
    instname: "",
    year: "",
    board: "",
    percentage: "",
    address: "",
  });
  const [cur, setCur] = useState({
    instname: "",
    passyear: "",
    address: "",
  });
  const [data, setData] = useState({
    uid: props.email,
    jobid:props.id,
    name: "",
    email: "",
    phoneNumber: "",
    address: addobj,
    matric: matobj,
    hse: hscobj,
    curstudy: cur,
    skills: skill,
    yearofexp: "",
    status:"applied"
  });
  const yearlist = [];
  for (let i = 1999; i <= 2024; i++) {
    yearlist.push(i);
  }
  const names = [
    "react js",
    "Javascript",
    "next js",
    "HTML",
    "CSS",
    "tailwind",
    "figma",
    "bootstrap",
    "node js",
    "express",
    "mongoDB",
    "sql",
    "web3",
    "java",
    "python",
    "c",
    "c++",
    "wordpress",
    "spline",
  ];
  const handleChange = (event: SelectChangeEvent<typeof skill>) => {
    const {
      target: { value },
    } = event;
    
    setskill(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSubmit = async () => {
    data.address=addobj;
    data.matric=matobj;
    data.hse=hscobj;
    data.curstudy=cur;
    data.skills=skill;
    console.log(data);
    await axios.post("http://localhost:3000/api/applicant/applied",data);
    alert('Application Submitted');
    router.push("/internship");
  };

  return (
    <>
      <div className="text-white flex justify-center p-4 m-8  bg-[#eefbff] rounded-xl">
        <form action="" className="p-1 gap-6 w-4/5">
          <p className="text-black uppercase text-2xl m-4 ">Personal Details</p>
          <FormControl fullWidth className="p-3">
            <InputLabel htmlFor="fname">Full Name</InputLabel>
            <Input
              id="fname"
              aria-describedby="fname-text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <FormHelperText id="fname-text">
              write your full name
            </FormHelperText>
          </FormControl>
          <div className="flex justify-between items-center ">
            <FormControl margin="normal" className="m-3 w-full">
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                id="email"
                aria-describedby="email-text"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <FormHelperText id="email-text">
                We ll never share your email.
              </FormHelperText>
            </FormControl>
            <FormControl className="m-3 w-full">
              <InputLabel htmlFor="phone">Phone No</InputLabel>
              <Input
                id="phone"
                aria-describedby="phone-text"
                value={data.phoneNumber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
              />
              <FormHelperText id="phone-text">
                We ll never share your phone no .
              </FormHelperText>
            </FormControl>
          </div>
          <br />
          <hr className="m-10" />
          <p className="text-black uppercase text-2xl m-4">address</p>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 m-2">
            <FormControl className=" w-full">
              <InputLabel htmlFor="address">address</InputLabel>
              <Input
                id="address"
                aria-describedby="address-line"
                className="rounded"
                value={addobj.address}
                onChange={(e) =>
                  setAddobj({ ...addobj, address: e.target.value })
                }
              />
              <FormHelperText id="address-line">
                current address line
              </FormHelperText>
            </FormControl>
            <FormControl className=" w-full">
              <InputLabel htmlFor="city">district</InputLabel>
              <Input
                id="city"
                aria-describedby="dist-text"
                value={addobj.city}
                onChange={(e) => setAddobj({ ...addobj, city: e.target.value })}
              />
              <FormHelperText id="dist-text">district name</FormHelperText>
            </FormControl>
            <FormControl className=" w-full">
              <InputLabel htmlFor="state">state</InputLabel>
              <Input
                id="state"
                aria-describedby="state-text"
                value={addobj.state}
                onChange={(e) =>
                  setAddobj({ ...addobj, state: e.target.value })
                }
              />
              <FormHelperText id="state-text">Mention state</FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 m-2">
            <FormControl className=" w-full ">
              <InputLabel htmlFor="country">Country</InputLabel>
              <Input
                id="country"
                aria-describedby="country-text"
                value={addobj.country}
                onChange={(e) =>
                  setAddobj({ ...addobj, country: e.target.value })
                }
              />
              <FormHelperText id="country-text">country name</FormHelperText>
            </FormControl>
            <FormControl className=" w-full">
              <InputLabel htmlFor="pin">PIN Code</InputLabel>
              <Input
                id="pin"
                type="pin"
                aria-describedby="pin-text"
                value={addobj.pincode}
                onChange={(e) => setAddobj({ ...addobj, pincode: e.target.value })}
              />
              <FormHelperText id="pin-text">Mention pin code</FormHelperText>
            </FormControl>
          </div>
          <hr className="m-10" />
          <p className="text-black uppercase text-2xl m-4">Education</p>
          <p className="text-gray-600 uppercase text-xl m-4">10th</p>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <FormControl className=" w-full">
              <InputLabel htmlFor="school">School Name</InputLabel>
              <Input
                id="school"
                aria-describedby="school-text"
                value={matobj.schooln}
                onChange={(e) =>
                  setmatobj({ ...matobj, schooln: e.target.value })
                }
              />
              <FormHelperText id="school-text">
                Mention School name
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 m-2">
            <FormControl variant="standard" className=" w-full">
              <InputLabel htmlFor="schoolyear">Passing Year</InputLabel>
              <Select
                labelId="schoolyear"
                id="year-select"
                label="year"
                aria-describedby="schooly-text"
                value={matobj.year}
                onChange={(e) => setmatobj({ ...matobj, year: e.target.value })}
              >
                {yearlist.map((item: any, index: number) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText id="schooly-text">
                Mention School Passing year
              </FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="board-select-label">BOARD</InputLabel>
              <Select
                labelId="board-select-label"
                id="board-select"
                label="board"
                aria-describedby="board-text"
                value={matobj.board}
                onChange={(e) =>
                  setmatobj({ ...matobj, board: e.target.value })
                }
              >
                <MenuItem value={"BSE"}>BSE</MenuItem>
                <MenuItem value={"CBSE"}>CBSE</MenuItem>
                <MenuItem value={"ICSE"}>ICSE</MenuItem>
              </Select>
              <FormHelperText id="board-text">
                select school board
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 ">
            <FormControl className=" w-full">
              <InputLabel htmlFor="school-add">school address</InputLabel>
              <Input id="school-add" aria-describedby="schooladd-text"
              value={matobj.address}
              onChange={(e) =>
                setmatobj({ ...matobj, address: e.target.value })
              } />
              <FormHelperText id="schooladd-text">
                Mention School name
              </FormHelperText>
            </FormControl>
            <FormControl className="w-full">
              <InputLabel htmlFor="marks">Mark</InputLabel>
              <Input id="marks" type="number" aria-describedby="marks-text" 
              value={matobj.percentage}
              onChange={(e) =>
                setmatobj({ ...matobj, percentage: e.target.value })
              }/>
              <FormHelperText id="marks-text">
                mention your secured marks in 10th standard in percentage
              </FormHelperText>
            </FormControl>
          </div>
          <p className="text-gray-600 uppercase text-xl m-4">+2/12th</p>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <FormControl className=" w-full">
              <InputLabel htmlFor="inst-name">
                Higher Secondary Institute Name
              </InputLabel>
              <Input id="inst-name" aria-describedby="inst-text" 
              value={hscobj.instname}
              onChange={(e) =>
                sethsc({ ...hscobj, instname: e.target.value })
              }/>
              <FormHelperText id="inst-text">
                Mention higher secondary institute name
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 ">
            <FormControl className=" w-full" variant="standard">
              <InputLabel htmlFor="hsecpyear">Passing Year</InputLabel>
              <Select
                labelId="hsecpyear"
                id="hsecpyearid"
                label="year"
                aria-describedby="hsecpyear-text"
                value={hscobj.year}
              onChange={(e) =>
                sethsc({ ...hscobj, year: e.target.value })
              }
              >
                {yearlist.map((item: any, index: number) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText id="hsecpyear-text">
                Mention higher secondary stydy passing year
              </FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="sec-board-select-label">BOARD</InputLabel>
              <Select
                labelId="sec-board-select-label"
                id="sec-board-select"
                label="Age"
                aria-describedby="sec-board-text"
                value={hscobj.board}
              onChange={(e) =>
                sethsc({ ...hscobj, board: e.target.value })
              }
              >
                <MenuItem value={"CHSE"}>CHSE</MenuItem>
                <MenuItem value={"CBSE"}>CBSE</MenuItem>
                <MenuItem value={"ICSE"}>ICSE</MenuItem>
              </Select>
              <FormHelperText id="sec-board-text">
                select higher secondary board
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 ">
            <FormControl className=" w-full">
              <InputLabel htmlFor="sec-add">Institute address</InputLabel>
              <Input id="sec-add" aria-describedby="secadd-text" 
              value={hscobj.address}
              onChange={(e) =>
                sethsc({ ...hscobj, address: e.target.value })
              }/>
              <FormHelperText id="secadd-text">
                Mention Institute address
              </FormHelperText>
            </FormControl>
            <FormControl className="w-full">
              <InputLabel htmlFor="marks">Mark</InputLabel>
              <Input id="marks" type="number" aria-describedby="marks-text" 
              value={hscobj.percentage}
              onChange={(e) =>
                sethsc({ ...hscobj, percentage: e.target.value })
              }/>
              <FormHelperText id="marks-text">
                mention your secured marks in 12th standard in percentage
              </FormHelperText>
            </FormControl>
          </div>
          <p className="text-gray-600 uppercase text-xl m-4">
            Current education
          </p>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <FormControl className=" w-full">
              <InputLabel htmlFor="curinst-name">
                Current Institute Name
              </InputLabel>
              <Input id="curinst-name" aria-describedby="curinst-text" 
              value={cur.instname}
              onChange={(e) =>
                setCur({ ...cur, instname: e.target.value })
              }/>
              <FormHelperText id="curinst-text">
                Mention current Institute Name
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <FormControl variant="standard" className=" w-full">
              <InputLabel htmlFor="upcomyear">Passing Year</InputLabel>
              <Select
                labelId="upcomyear"
                id="year-select"
                label="year"
                aria-describedby="upcom-year"
                value={cur.passyear}
              onChange={(e) =>
                setCur({ ...cur, passyear: e.target.value })
              }
              >
                {yearlist.map((item: any, index: number) => (
                  <MenuItem value={item + 4} key={index}>
                    {item + 4}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText id="upcom-year">
                Mention School Passing year
              </FormHelperText>
            </FormControl>
            <FormControl className="w-full">
              <InputLabel htmlFor="curinstadd">address</InputLabel>
              <Input id="curinstadd" aria-describedby="curinstadd-text" 
              value={cur.address}
              onChange={(e) =>
                setCur({ ...cur, address: e.target.value })
              }/>
              <FormHelperText id="curinstadd-text">
                mention your current institute address
              </FormHelperText>
            </FormControl>
          </div>
          <hr className="m-10" />
          <p className="text-black uppercase text-2xl m-4">skills</p>
          <br />
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 mt-6 text-black">
            <FormControl fullWidth variant="standard">
              <InputLabel id="skill-multiple-chip-label">Chip</InputLabel>
              <Select
                labelId="skill-multiple-chip-label"
                id="skill-multiple-chip"
                multiple
                value={skill}
                onChange={handleChange}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className=" w-full">
              <InputLabel htmlFor="yearexp">year of experience</InputLabel>
              <Input
                id="yearexp"
                type="number"
                aria-describedby="yearexp-text"
                value={data.yearofexp}
              onChange={(e) => setData({ ...data, yearofexp: e.target.value })}
              />
              <FormHelperText id="yearexp-text">
                experience in this field
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            skills
          </div>
          <div className="m-4 flex justify-end p-4">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
