import Link from 'next/link';
import React from 'react';
import RemoveBtn from './RemoveBtn';
import { FiEdit } from "react-icons/fi";

const getPosts = async () => {
  try{
    const res = await fetch("http://localhost:3000/api/posts", {
      cache:"no-store"
    });
    if(!res.ok){
      throw new Error ("Failed to fetch posts")
    }

    return res.json();

  }
  catch(err){
    console.log(err, "Error Loading Topics")
  }

  
}




export default async function  AllPosts() {
  const {posts}= await getPosts();

  return (
    <>
    {posts.map(post=>(
    <div className='flex justify-center'>
    <Link href={`/${post._id}`} class="block my-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
    <p class="font-normal text-md text-gray-700 dark:text-gray-400">{post.description}</p>
    <p class="font-normal text-xs text-gray-500 dark:text-gray-400 py-2">Created At : {post.createdAt}</p>
  
    <div className='flex justify-end gap-3'> <RemoveBtn /><Link href={`/editPost/${post._id}`}><FiEdit size={24} />
    </Link></div>
   
    </Link>
    
    </div>
    ))}
    </>
    
  )
}
