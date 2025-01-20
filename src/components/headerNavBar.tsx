"use client"
import React, { useState } from 'react'
import { logout } from '@/actions/authActions';
import Link from 'next/link';

export default function HeaderNavBar() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Dateme</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link href={"#"}>About</Link></li>
            <li>
                <details>
                    <summary>Profile</summary>
                    <ul className="bg-base-100 rounded-t-none p-2 z-10">
                        <li><Link href="#">My Account</Link></li>
                        <li>
                            <button onClick={logout} className="">Logout</button>
                        </li>
                    </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
  )
}
