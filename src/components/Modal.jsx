import React from "react";
import { motion } from "framer-motion";

export default function Modal({ open, onClose, program }){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 z-10">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-slate-500">{program.level}</div>
            <div className="text-2xl font-extrabold">{program.title} — Syllabus</div>
          </div>
          <button onClick={onClose} className="text-slate-500">Close</button>
        </div>

        <div className="mt-4 grid gap-3">
          {program.topics.map((t, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-50 border">{t}</div>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-600">Project: <b>{program.project}</b></div>
      </motion.div>
    </div>
  );
}
