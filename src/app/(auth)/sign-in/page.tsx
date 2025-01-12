import { SignInCard } from "@/features/auth/components/sign-card";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";

const SignIn = async () => {
  const user = await getCurrent();
  if (user) redirect("/");
  return (
    <div className="h-full ">
      <SignInCard />
    </div>
  );
};

export default SignIn;
