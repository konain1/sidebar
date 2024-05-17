import React, { Children } from 'react'
import {ChevronFirst} from "lucide-react"
import { Camera } from 'lucide-react';

function Sidebar({Children}) {
  return (
    <aside className='h-screen'>
 
    <nav className='h-full flex flex-col bg-[lightgreen]  border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center border border-black'>
            <img className='h-[30px] w-[32px]' src=' https://i.pinimg.com/originals/b8/fd/82/b8fd821c02183a8d19765c9362bf2465.jpg' />

            <button className='flex'>
                {/* <ChevronFirst /> */}
             </button>
        </div>
        <ul className='flex-1 px-3'> {Children}</ul>
    </nav>
    </aside>
  )
}



export default Sidebar