import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { FaKey } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
export interface IDropdownUserProps {}

export default function DropdownUser(props: IDropdownUserProps) {
  return (
    <div className=" flex flex-col items-center cursor-pointer group">
      <div className="flex items-center">
        <p className="text-slate-800">Apakorn Buakum</p>
        <HiChevronDown className="translate-y-0.5 text-slate-800" />
      </div>
      <div className="absolute top-10 -left-16 rounded-md hidden group-hover:block bg-slate-400 p-2 w-[200px] text-white font-light">
        <div className="flex items-center">
          <FaKey />
          <p>Change password</p>
        </div>
        <div className="flex items-center">
          <IoLogOut />
          <p>Change password</p>
        </div>
      </div>
    </div>
  );
}
