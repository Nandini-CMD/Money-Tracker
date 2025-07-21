import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
// This is the header component that will be used in the layout
// It will display the sign-in button when the user is signed out

const header = () => {
  return (
    <div>
        <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    </div>
  )
}

export default header