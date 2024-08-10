import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

// Updating Post

export async function PUT(req,{params}) {
    const {id} = params;
    const {newTitle:title , newDescription: description}= await req.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Post Updated"},{status:200})
    
}

// finding post by id

export async function GET(req,{params}) {
    const {id}=params;
    await connectMongoDB();
    const post = await Post.findOne({_id:id});
    return NextResponse.json({post},{satus:200});    
}
