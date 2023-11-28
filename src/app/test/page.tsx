"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";

function Page() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        this is the testing page for the project for further developement
      </div>
    </>
  );
}

export default Page;
