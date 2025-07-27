import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import {
  SignIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
} from "@clerk/nextjs";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline">
          <AlignLeft></AlignLeft>
          <UserIcon></UserIcon>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton>
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          <DropdownMenuSeparator />
          {links.map((link, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
