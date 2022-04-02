import React from "react";
import Navbar from "../components/Navbar/Navbar";

export interface ITodoScreenProps {}

export default function TodoScreen(props: ITodoScreenProps) {
  return (
    <div className="bg-slate-400 h-screen w-screen flex justify-center items-center">
      <div className="bg-zinc-100 h-[90%] w-[90%] rounded-2xl p-8">
        <Navbar />
      </div>
    </div>
  );
}
