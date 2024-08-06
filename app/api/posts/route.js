import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

// Creating post API Route

export async function POST(req) {

    const {title,description} = await req.json();
    await connectMongoDB();
    await Post.create({title,description});
    return NextResponse.json({message:"Post Created"},{status:201});
    
}

// Getting posts API Route

export async function GET() {
    await connectMongoDB();
    const posts= await Post.find();
    return NextResponse.json({posts})
    
}

// Deleteing posts API Route

export async function DELETE(req) {
    const id=req.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message:"Post Deleted"},{status:200});

    
}