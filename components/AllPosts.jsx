import Link from 'next/link';
import React from 'react';
import RemoveBtn from './RemoveBtn';
import { FiEdit } from "react-icons/fi";




const AllPosts = () => {
  return (
    <div className='flex justify-center'>
    <Link href={"/"} class="block my-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-md text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  
    <div className='flex justify-end gap-3'>    <RemoveBtn /><Link href={"/editPost/id"}><FiEdit size={24} />
    </Link></div>
   
    </Link>
    
    </div>
  )
}

export default AllPosts