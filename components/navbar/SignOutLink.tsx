'use client';
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleSignOut = () => {
    toast.success("You have successfully signed out.");
  };

  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleSignOut}>Logout</button>
    </SignOutButton>
  );
};

export default SignOutLink;
