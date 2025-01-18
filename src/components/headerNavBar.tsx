"use client"
import React, { useState } from 'react'

export default function HeaderNavBar() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='flex flex-col'>
        <button className='cursor-pointer' onClick={() => setShowNav(prev => !prev)}>Profile</button>
        <div className='relative w-full rounded-md'>
            <ul className={`flex absolute right-0 flex-col p-3 absolute z-10 mt-5 bg-white gap-3 h-auto ${showNav ? 'block' : 'hidden'}`}>
                <li>Profile Settings</li>
                <li>
                    <form>
                        <button>Logout</button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
  )
}
