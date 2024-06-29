import React from "react";

import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";

function LoginPage() {
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

export default LoginPage;
