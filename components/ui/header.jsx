import { SignedIn, SignedOut, SignInButton, UserButton, SignUp } from "@clerk/nextjs";
import  Link  from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { LayoutDashboard } from "lucide-react";
// This is the header component that will be used in the layout
// It will display the sign-in button when the user is signed out

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b shadow-md z-50">
      <nav className="container mx-auto px-4 PY-4 flex items-center justify-between bg-gray-800 text-white p-4">
        <Link href="/">
        <Image
          src="/logo (2).png"
          alt="Logo"
          width={100}
          height={100}
          className="h-12 w-auto object-contain rounded-full"
        />
        </Link>  
      
        <div>
          <SignedIn>
            <Link href="/dashboard">
            <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-100">
                <LayoutDashboard size={18} className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Dashboard</span>
            </Button>
            </Link>
            
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-100">
                Login
              </Button>
            </SignInButton>

          </SignedOut>
          <SignedIn>
            <UserButton />    
          </SignedIn>
        </div>  
      </nav>
    </div>
  )
}

export default Header