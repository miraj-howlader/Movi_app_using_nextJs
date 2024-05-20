'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit=(e)=>{
       e.preventDefault();
       router.push(`/search/${search}`)
     
    }
  return (
    <form onSubmit={handleSubmit} className=" flex justify-between px-5 mx-auto max-w-5xl
     ">
      <input
      className=' w-full h-14 rounded-md placeholder-gray-300
       outline-none bg-transparent flex-1'
       type="text" placeholder='Search Keywords...'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
        />
       <button className='text-amber-500 disabled:text-gray-400' disabled={search===''}>Search</button>
    </form>
  )
}
