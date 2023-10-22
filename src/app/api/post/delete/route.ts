import Posts from "@/models/PostModel";
import connect from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()

export async function DELETE() {
    try {
        
    } catch (error:any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}