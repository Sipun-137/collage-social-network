import Events from "@/models/EventModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()

export async function GET() {
    try {
        const newobj=await Events.find();
        const data = NextResponse.json(newobj);
        return data;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}

export async function POST(req:NextRequest){
    try {
        const newobj=await req.json()
        const tosave=new Events(newobj);
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