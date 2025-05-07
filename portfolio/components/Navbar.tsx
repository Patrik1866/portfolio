import Link  from "next/link";
import routes from "../src/app/routes";

const Navbar = () =>{
    return(
        <nav>
            <ul className="flex gap-10 justify-center mt-6">
                <li><Link href={routes.Contact}>Contact</Link></li>
                <li><Link href={routes.Works}>Works</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;