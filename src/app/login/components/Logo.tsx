import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="h-full flex justify-center items-center">
      <Image src="/shopping.gif" alt="shopping" width={450} height={450} />
    </div>
  );
}

export default Logo;
