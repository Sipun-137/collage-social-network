import Applicants from "@/models/ApplicantModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()


export async function POST(req:NextRequest) {
    try {
        const obj=await req.json()
        console.log(obj.id)

        const applicant= await Applicants.findOne({_id:obj.id})
        return NextResponse.json({
            applicant,
            message:"successfully object found"
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}

export async function PUT(req:NextRequest) {
    try {
        const obj=await req.json()
        console.log(obj.status)
        Applicants.updateOne({_id:obj.id},{$set:{status:obj.status}}).then(()=>{
            console.log("successfully updated")
        })
        return NextResponse.json({
            obj,
            message:"successfully updated"
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}