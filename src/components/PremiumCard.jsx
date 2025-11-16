import React from "react";
import { motion } from "framer-motion";

export default function PremiumCard({ program, onShow }){
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-6 rounded-3xl shadow-2xl border-2 border-white/40 bg-white/70 backdrop-blur-md"
      style={{ background: `linear-gradient(135deg, ${program.colorFrom}, ${program.colorTo})` }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-slate-700">{program.level}</div>
            <div className="text-2xl font-extrabold text-slate-900 mt-2">{program.title}</div>
            <div className="mt-4 text-sm text-slate-700">
              {program.duration} • {program.price}
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center font-bold text-white shadow"
              style={{ background: `linear-gradient(135deg, ${program.colorFrom}, ${program.colorTo})` }}
            >
              {program.title.split(" ")[0][0]}
            </div>
            <button
              onClick={() => onShow(program)}
              className="px-3 py-2 rounded-md bg-white/90 border text-sm"
            >
              Show Topics
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          {program.topics.slice(0, 4).map((t, i) => (
            <div key={i} className="text-sm text-slate-700 bg-white/60 p-2 rounded-lg">
              {t}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="text-xs text-slate-600">Project:</div>
          <div className="text-sm font-medium">{program.project}</div>
        </div>
      </div>
    </motion.div>
  );
}
