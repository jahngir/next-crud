import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

// creating post API Route

export async function POST(req) {

    const {title,description} = await req.json();
    await connectMongoDB();
    await Post.create({title,description});
    return NextResponse.json({message:"Post Created"},{status:201});
    
}

//getting posts API Route

export async function GET() {
    await connectMongoDB();
    const posts= await Post.find();
    return NextResponse.json({posts})
    
}