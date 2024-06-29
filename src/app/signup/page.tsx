import React from "react";
import Logo from "../login/components/Logo";
import LoginForm from "../login/components/LoginForm";

function SignUp() {
  return (
    <div className="w-full h-full grid grid-cols-6">
      <div className="hidden sm:block"></div>
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="col-span-2">
        <LoginForm />
      </div>
      <div className="hidden sm:block"></div>
    </div>
  );
}

export default SignUp;
