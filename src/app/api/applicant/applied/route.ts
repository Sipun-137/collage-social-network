import Applicants from "@/models/ApplicantModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()

export async function POST(req: NextRequest) {
    try {
        // const obj=await req.json();
        // JSON.stringify(obj)
        // const id=obj.params.id
        const newobj = await req.json()
        JSON.stringify(newobj)
        console.log(newobj);
        const tosave=new Applicants(newobj);
        await tosave.save().then(()=>{
            console.log("saved successfully")
        });
        return NextResponse.json({
            message:"successfully data saved",
            data:newobj
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}
