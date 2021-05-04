import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
    return (
      
        <nav>
            <div className="logo">
            <Image src="/logo.png" width = {0} height = {90}/></div>
          
            <Link href="/"><a>Home</a></Link>
            <Link href="/about-us"><a>About Us</a></Link>
            <Link href="/contact-us"><a>Contact Us</a></Link>
            <Link href="/people"><a>People List</a></Link>
           
        </nav>
   
    );
}

export default Navbar;