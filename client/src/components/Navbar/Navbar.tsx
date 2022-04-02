import React from "react";
import UserBox from "../UserBox/UserBox";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="flex justify-between items-center">
      <p className="font-normal text-3xl text-slate-800">Todos</p>
      <UserBox />
    </div>
  );
}
