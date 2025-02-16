import Link from "next/link";
import React from "react";

function layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      layout home
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/streaming"}>Steaming page</Link>
        </li>
        <li>
          <Link href={"/client"}>Client page</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default layout;
