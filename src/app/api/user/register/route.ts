import connect from "@/dbconfig/dbConfig";
import Users from "@/models/UserModel"
import { NextRequest, NextResponse } from "next/server";
connect()

export async function POST(req: NextRequest){
    try {
        const newobj = await req.json()
        let user = new Users(newobj)
        user.save().then(()=>{
            console.log("new user registered")
        })
        return NextResponse.json({
            message:"success"
        })
        
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}