import Link from "next/link";

const Navbar = () => {
    return ( 
        <>
            <nav>
                <ul className="menu-bar">
                    <Link href='/home'><a>Home</a></Link>
                    <Link href='/about'><a>About</a></Link>
                    <Link href='/services'><a>Services</a></Link>
                    <Link href='/contact'><a>Contact</a></Link>
                </ul>         
            </nav>
        </>
     );
}
 
export default Navbar;