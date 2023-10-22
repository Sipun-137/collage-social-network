import Posts from "@/models/PostModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()


export async function GET() {
    try {
        const newobj=await Posts.find();
        const data = NextResponse.json(newobj);
        return data;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}