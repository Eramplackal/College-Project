import React from 'react'
import DashNav from './DashNav'; 


export default function Dashboard() {
    const isAuthenticated = localStorage.getItem("token"); 
  return (
    <>
    <DashNav/>
    </>
  )
}
