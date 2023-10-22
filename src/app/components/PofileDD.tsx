import React from "react";
import Link from "next/link";
const ProfileDD = () => {
  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="">
        profile
      </label>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href={"/profile"}>profile</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">logout</Link>
        </li>
      </ul>
    </div>
  );
};
export default ProfileDD;
