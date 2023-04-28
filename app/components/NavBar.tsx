import Link from "next/link";
import LoginModal from "./AuthModal";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between m-auto w-[95%]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-orange-500 text-2xl">
            <Image src={logo} alt="Find Me a Table Logo" className="w-1/12 mr-4"/>
            Find Me a Table
          </Link>
        </div>
        <div className="flex items-center">
            <LoginModal isSignIn={true}/>
            <LoginModal isSignIn={false}/>
        </div>
    </nav>
  )
}
