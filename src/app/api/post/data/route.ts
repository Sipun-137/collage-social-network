import Posts from "@/models/PostModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()


export async function POST(req: NextRequest) {
    try {
        const obj=await req.json();
        JSON.stringify(obj)
        const id=obj.params.id
        const newobj=await Posts.findById({"_id":id});
        const data = NextResponse.json(newobj);
        return data;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}