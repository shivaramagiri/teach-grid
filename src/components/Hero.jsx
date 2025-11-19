import React from "react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-extrabold text-slate-900 leading-tight">
          Become a developer with <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">colorful hands-on</span> training
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-lg text-slate-700">Interactive live classes, real projects, and placement-focused mentorship for HTML, CSS, JS, React, Angular, Node & MongoDB.</motion.p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg hover:scale-105 transition">Join Free Workshop</button>
          <a href="#courses" className="px-6 py-3 rounded-xl border-2 border-pink-200">View Curriculum</a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
          <div className="p-3 rounded-lg bg-white shadow">Live Project</div>
          <div className="p-3 rounded-lg bg-white shadow">Mentorship</div>
          <div className="p-3 rounded-lg bg-white shadow">Career Help</div>
           <div className="p-3 rounded-lg bg-white shadow">Resume Build</div>
           <div className="p-3 rounded-lg bg-white shadow">Mock Interview</div>
        </div>
      </div>

      <div className="flex-1">
        <div className="relative">
          <div className="rounded-3xl p-6 bg-gradient-to-br from-white via-pink-50 to-yellow-50 shadow-2xl border border-pink-100">
            <div className="text-sm text-pink-600 font-semibold">Next batch</div>
            <div className="mt-2 text-lg font-bold">Starts Dec 1, 2025</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg shadow">React</div>
              <div className="p-3 bg-white rounded-lg shadow">Node</div>
              <div className="p-3 bg-white rounded-lg shadow">MongoDB</div>
              <div className="p-3 bg-white rounded-lg shadow">Angular</div>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 text-5xl font-extrabold text-pink-50 opacity-60">DEV</div>
        </div>
      </div>
    </section>
  );
}
