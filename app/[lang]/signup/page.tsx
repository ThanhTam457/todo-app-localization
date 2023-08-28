import React from "react";
import Link from "next/link";
import SignUp_Form from "../components/SignUp_Form";
import { dictionary } from "@/dictionaries/content";

const SignUp = ({params}: {params: {lang: string}}) => {
    return ( 
        <div className="h-full" style={{textAlign: "center", alignItems: "center"}}>
            <div style={{paddingTop: "100px"}}>
                <h1 className="text-4xl text-center">{dictionary[params.lang]?.s_u_greeting}!</h1>
                <p style={{fontSize: "25px"}}>{dictionary[params.lang]?.s_u_quote}</p>
                <div className="flex items-center justify-center p-5">
                    <img src="/images/img2.png" alt="" width={70} className='mb-3'/>
                </div>
                <SignUp_Form params={params}/>
                <p style={{fontSize: "25px"}}>{dictionary[params.lang]?.s_u_question} ?  <Link href="signin" style={{textDecoration: "none", color: "#F700C4"}}>{dictionary[params.lang]?.s_i_button}</Link></p>
            </div>
        </div>
     );
}
 
export default SignUp;