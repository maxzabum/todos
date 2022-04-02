import React from "react";
import DropdownUser from "./DropdownUser";

export interface IUserBoxProps {}

export default function UserBox(props: IUserBoxProps) {
  return (
    <div className="flex items-center gap-5 relative">
      <DropdownUser />
      <img
        src="https://source.unsplash.com/random/?portrait"
        alt="img-user"
        className="block mx-auto object-cover h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
      />
    </div>
  );
}
