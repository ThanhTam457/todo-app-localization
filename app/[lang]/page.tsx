import React from "react";
import Link from "next/link";
import { dictionary } from "@/dictionaries/content";

export default function Home( {params} : {params: {lang:string}}) {
  return (
      <div className='home' style={{textAlign: "center", alignItems: "center"}}>
        <div style={{textAlign: "center", alignItems: "center", paddingTop: "70px", paddingLeft: "300px", paddingRight: "300px"}}>
            <div className="flex items-center justify-center p-5">
                <img src="/images/background.png" alt="" style={{width: "400px"}} />
            </div>
            <h1 className="text-3xl text-center  font-bold">{dictionary[params.lang]?.title}</h1>
            <h4>{dictionary[params.lang]?.home_greeting}</h4>
            <Link href={'/signup'}>
                <button style={{backgroundColor: "#F700C4", height: "100px", width: "100%", textDecoration: "bold", fontSize: "50px"}}>{dictionary[params.lang]?.home_button}</button>
            </Link>
        </div>
      </div>
  )
}
