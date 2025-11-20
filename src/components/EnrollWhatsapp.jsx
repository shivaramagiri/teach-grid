import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function EnrollViaWhatsapp() {
  const whatsappNumber = "919848696422"; // Replace with your number
  const message = "Hi, I want to enroll. Please share the details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div id="enroll" className="py-12 sm:py-16 md:py-20 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-white/70 backdrop-blur-xl border border-white/40"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-slate-900 mb-6 text-center"
        >
          Enroll via WhatsApp
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center text-slate-700 mb-8"
        >
          Have questions or ready to join?  
          Connect with us instantly on WhatsApp!
        </motion.p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 py-4 rounded-xl text-white font-semibold
                     shadow-lg bg-gradient-to-r from-green-500 to-green-700 w-full"
        >
          <FaWhatsapp size={24} />
          Enroll Now on WhatsApp
        </motion.a>

        <div className="mt-10 text-center text-slate-700">
          <p>Or message us directly at:</p>
          <p className="font-bold text-slate-900 mt-1">+{whatsappNumber}</p>
        </div>
      </motion.div>
    </div>
  );
}
