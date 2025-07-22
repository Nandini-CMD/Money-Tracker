import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
// This is the header component that will be used in the layout
// It will display the sign-in button when the user is signed out

const Header = () => {
  return (
    <div className="fixed top-0 ">
        <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    </div>
  )
}

export default Header