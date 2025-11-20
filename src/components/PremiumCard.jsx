import React from "react";
import { motion } from "framer-motion";

export default function PremiumCard({ program, onShow }){
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-6 rounded-3xl shadow-2xl border-2 border-white/40 bg-white/70 backdrop-blur-md"
      style={{
        background: `linear-gradient(135deg, ${program.colorFrom}, ${program.colorTo})`,
      }}
    >
      <div className="relative z-10">
        <div className="text-center">
          <div
            className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
            {program.level}
          </div>
          <div className="text-2xl font-extrabold text-slate-900 mt-2">
            {program.title}
          </div>
          {/* <div className="mt-4 text-sm text-slate-700">
              {program.duration} • {program.price}
            </div> */}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          {program.topics.slice(0, 4).map((t, i) => (
            <div
              key={i}
              className="text-sm text-slate-700 bg-white/60 p-2 rounded-lg"
            >
              {t}
            </div>
          ))}
        </div>

        {/* <div className="mt-6 flex items-center gap-3">
          <div className="text-xs text-slate-600">Project:</div>
          <div className="text-sm font-medium">{program.project}</div>
        </div> */}
      </div>
      <div className="w-full flex justify-center mt-6">
        <button
          onClick={() => onShow(program)}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white 
             shadow-lg transition-all duration-200
             bg-gradient-to-r from-indigo-500 to-pink-500
             hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          Show Topics
        </button>
      </div>
    </motion.div>
  );
}
