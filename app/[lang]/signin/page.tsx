import React from "react";
import SignIn_Form from "../components/SignIn_Form";
import { dictionary } from "@/dictionaries/content";

const SignIn = ({params}: {params: {lang:string}}) => {
    return ( 
        <div className="h-full"  style={{textAlign: "center", alignItems: "center"}}>
            <div style={{paddingTop: "100px"}}>
                <h1 className="text-4xl text-center">{dictionary[params.lang]?.s_i_greeting}</h1>
                <div className="flex items-center justify-center p-5">
                    <img src="/images/img3.png" alt="" className="mb-3"/>
                </div>
                <SignIn_Form params={params}/>
                <p style={{fontSize: "25px"}}>{dictionary[params.lang]?.s_i_quote} ?  <a href="signup" style={{textDecoration: "none", color: "#F700C4"}}>{dictionary[params.lang]?.s_u_button}</a></p>
            </div>
        </div>
     );
}
 
export default SignIn;