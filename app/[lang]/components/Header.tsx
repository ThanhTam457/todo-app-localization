'use client'

import Link from "next/link";
import { Button } from "react-bootstrap";
import { dictionary } from "@/dictionaries/content";
import { clearUser } from "@/redux/userSlice";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

const Header = ({params}: {params: {lang: string}}) => {

    const dispatch = useAppDispatch();

    const router = useRouter();

    const handleLogout = () =>{
        dispatch(clearUser());
        sessionStorage.clear();
        router.push('/signin');
    }

    return ( 
        <div>
            <div style={{backgroundImage : "url(/images/img4.png)", height: "200px", textAlign: "center"}}>
                <h2 style={{paddingTop: "100px"}}>{dictionary [params.lang]?.welcome} Thanh Tam</h2>
                <Button style={{color: 'white'}} onClick={handleLogout}>{dictionary[params.lang]?.logout_name}</Button>
            </div>
        </div>
     );
}
 
export default Header;