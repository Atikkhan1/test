'use client'

import { useState } from "react";

export default function Home() {
  const [msg,setMsg] = useState('')
  async function fetchEmail() {
    let res = await fetch('/api/send',{
      headers:{
        "Content-Type":"application/json"
      }
    })
    let getres = await res.text()
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
