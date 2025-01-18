"use client"
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/contexts/authContext'

export default function Info() {

  const user = useContext(AuthContext)

  useEffect(() => {
    console.log("User: ",user)
  }, [])  

  return (
    <div>{ user?.email }</div>
  )
}
