"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, Loader, RotateCw } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { icon } from "leaflet";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  //code
  const { pending } = useFormStatus();

  return (
    <Button
      className={`${className} capitalize`}
      disabled={pending}
      type="submit"
      size={size}
    >
      {
        pending ? (
          <>
            {" "}
            <Loader className="animate-spin" />
            <span>Please wait...</span>
          </> //เป็นจริง ให้ทำการหมุน
        ) : (
          <>{text}</>
        ) //เป็นเท็จ ให้แสดงข้อความ
      }
    </Button>
  );
};

export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon">
        <Heart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  console.log(isFavorite);
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size='icon'>
      {
        pending 
        ? <RotateCw className="animate-spin"/>
        : isFavorite 
        ? <Heart fill='black'/>
        : <Heart />
      }
    </Button>
  );
};
