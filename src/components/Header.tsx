import Link from "next/link";
import "../style/header.css";



export default function Header(){
    return(
        <div className="main-header">
            <div className="header1"  >
                <h1>H-Farooqui</h1>

            </div>
            <div className="header2">
                <ul className="link" >
                    <li><Link className="nav-links" href={"/home"}>Home</Link></li>
                    <li><Link className="nav-links" href={"/about"}>About</Link></li>
                    <li><Link className="nav-links" href={"/contact"}>Contact Us</Link></li>
                    {/* <li><Link className="nav-links" href={""}></Link></li> */}
                </ul>

            </div>
        </div>
    )
}