import Events from "@/models/EventModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Posts from "@/models/PostModel";
connect()

export async function GET() {
    try {
        const newobj=await Posts.find({type:"job"});
        const data = NextResponse.json(newobj);
        return data;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}
