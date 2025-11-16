import React from "react";

export default function Header(){
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 flex items-center justify-center text-white text-xl font-extrabold shadow-2xl">T</div>
        <div>
          <div className="text-xl font-bold text-slate-800">Teach   Grid</div>
          <div className="text-xs text-slate-500">Learn Smart, Code Smarter</div>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#courses" className="hover:text-pink-500">Courses</a>
        <a href="#pricing" className="hover:text-pink-500">Pricing</a>
        <a href="#contact" className="hover:text-pink-500">Contact</a>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-emerald-400 text-white">Enroll</button>
      </nav>
    </header>
  );
}
