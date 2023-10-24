import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Events from "@/models/EventModel";
connect()

export async function POST(req: NextRequest){
    try {
        console.log("specific event retrival")
        const obj=await req.json();
        // JSON.stringify(obj)
        const id=obj.params.id
        console.log(obj)
        const newobj=await Events.findById({"_id":id});
        console.log(newobj)
        const data = NextResponse.json(newobj);
        return data;

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}