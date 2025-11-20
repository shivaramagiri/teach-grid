import React from "react";
import { motion } from "framer-motion";

export default function TrainerModal({ open, onClose, trainer }) {
  if (!open || !trainer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-6 z-10 
                   max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{trainer.name}</h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-black"
          >
            ✖
          </button>
        </div>

        {/* Sub title */}
        <p className="text-sm text-gray-500">{trainer.role}</p>
        <p className="text-blue-600 font-medium">{trainer.experience}</p>

        {/* Photo */}
        <div className="flex justify-center my-4">
          <img
            src={trainer.photo}
            alt={trainer.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow"
          />
        </div>

        {/* About */}
        <h3 className="text-lg font-semibold mt-4">About Trainer</h3>
        <p className="text-gray-700 mt-1">{trainer.about}</p>

        {/* Skills */}
        <h3 className="text-lg font-semibold mt-4">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {trainer.skills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 border rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Courses */}
        {trainer.courses && (
          <>
            <h3 className="text-lg font-semibold mt-4">Courses Offered</h3>
            <ul className="list-disc pl-6 text-gray-700 mt-1">
              {trainer.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </>
        )}

        {/* LinkedIn Profile Link */}
{trainer.linkedin && (
  <a
    href={trainer.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 block text-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 flex items-center justify-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="w-5 h-5"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 
      1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.306V6.169H2.542v7.137h2.401zm-1.2-8.126c.837 
      0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 
      .694.521 1.248 1.327 1.248h.016zm4.908 8.126h2.4V9.359c0-.211.016-.423.078-.574.171-.422.559-.86 
      1.21-.86.854 0 1.195.649 1.195 1.602v3.78h2.4V9.25c0-2.17-1.158-3.177-2.703-3.177-1.247 
      0-1.803.689-2.113 1.177h.016V6.169h-2.4c.03.676 0 7.137 0 7.137z"/>
    </svg>
    View LinkedIn Profile
  </a>
)}
      </motion.div>
    </div>
  );
}
