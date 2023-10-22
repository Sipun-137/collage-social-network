import { NextRequest, NextResponse } from "next/server";
import connect  from "@/dbconfig/dbConfig";
import Posts from "@/models/PostModel";
connect()

export async function POST(request:NextRequest){
try {
    const newobj=await request.json()
    console.log(newobj);
    const tosave=new Posts(newobj);
    await tosave.save().then(()=>{
        console.log("saved successfully")
    });
    return NextResponse.json({
        message:"successfully data saved",
        data:newobj
    })
} catch (error:any) {
    return NextResponse.json({
        error:error.message
    },{status:500}) 
}


}