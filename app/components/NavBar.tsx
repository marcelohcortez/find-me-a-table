"use client"

import Link from "next/link";
import AuthModal from "./AuthModal";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

function NavBar() {
  const {data, loading} = useContext(AuthenticationContext);
  const {signout} = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between m-auto w-[95%]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-orange-500 text-2xl">
            <Image src={logo} alt="Find Me a Table Logo" className="w-1/12 mr-4"/>
            Find Me a Table
          </Link>
        </div>
        {loading ? null : (
          <div className="flex items-center">
          {data ? <button className="bg-orange-400 text-white border-orange-400 border p-1 px-4 rounded mr-3" onClick={signout}>Sign out</button> : (
            <>
            <AuthModal isSignIn={true}/>
            <AuthModal isSignIn={false}/>
            </>
          )}
        </div>
        )}
    </nav>
  )
}
export default NavBar;