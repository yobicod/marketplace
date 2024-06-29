import Image from "next/image";
import React from "react";

function LoginLogo() {
  return (
    <div className="h-full flex justify-center items-center">
      <Image src="/login.gif" alt="shopping" width={450} height={450} />
    </div>
  );
}

export default LoginLogo;
