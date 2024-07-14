'use client'

import { useState } from "react";

export default function Home() {
  const [msg,setMsg] = useState('')
  async function fetchEmail() {
    let res = await fetch('/api/send')
    const getres = await res.json();
    setMsg(getres)
  }
  
  return (
   <>
   <button className="flex m-auto" onClick={()=>{fetchEmail()}}>
    click and send
   </button>
   <p>{msg}</p>
   </>
  );
}
