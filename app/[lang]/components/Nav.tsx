import LanguageSwitcher from "./LanguageSwitcher";

const Nav = ({params}: {params: {lang: string}}) => {
    return ( 
        <div>
            <LanguageSwitcher params={params}/>
        </div>
     );
}
 
export default Nav;