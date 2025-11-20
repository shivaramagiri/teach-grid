import React from "react";
import { motion } from "framer-motion";

export default function Modal({ open, onClose, program }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden
        bg-white/70 backdrop-blur-xl border border-white/40"
        style={{
          background: `linear-gradient(
            135deg, 
            ${program.colorFrom}AA, 
            ${program.colorTo}AA
          )`,
        }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-start p-6 bg-white/40 backdrop-blur-md border-b border-white/40">
          <div>
            <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wide
                bg-white/80 border border-white/50 text-slate-700 shadow-sm">
              {program.level}
            </div>

            <div className="text-3xl font-extrabold text-slate-900 mt-3 leading-tight drop-shadow-sm">
              {program.title}
            </div>

            <div className="text-sm text-slate-700 mt-1">
              Full Syllabus Overview
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-700 hover:text-red-500 text-2xl font-bold transition-all"
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE CONTENT AREA */}
        <div
          className="px-6 py-4 space-y-3 overflow-y-auto"
          style={{
            maxHeight: "60vh",           // 👈 restrict height
            scrollbarWidth: "thin",
          }}
        >
          {program.topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50
                text-slate-800 text-sm shadow-sm hover:shadow-md transition-all"
            >
              {topic}
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="p-6 pt-0 pb-7 flex justify-end bg-white/20 backdrop-blur-md border-t border-white/40">
          <button
            onClick={onClose}
            className="px-6 py-2 text-sm font-semibold rounded-xl shadow-md
              bg-gradient-to-r from-indigo-500 to-pink-500 text-white 
              hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
