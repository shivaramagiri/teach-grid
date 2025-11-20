import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkshopModal({ open, onClose }) {
  const course = [
    "Frontend Development", "Backend Development", "Full-Stack Development", "DevOps Engineering",
    "Cloud Engineering", "Mobile App Development", "UI/UX Design", "QA / Software Testing",
    "Automation Testing", "Data Science", "Machine Learning", "Artificial Intelligence",
    "Cybersecurity", "Blockchain Development", "Game Development", "Embedded Systems",
    "IoT Development", "Product Management", "Business Analyst", "Database Administration",
    "Site Reliability Engineering (SRE)", "IT Support / Helpdesk", "Network Engineering",
    "Software Architecture"
  ];

  const userCategories = [
    "Student (College)", "Student (School)", "Fresher", "Job Seeker", "Working Professional",
    "Experienced Professional", "Career Change Aspirant", "Intern", "Freelancer", "Entrepreneur",
    "Homemaker looking to restart career", "Other",
  ];

  const indiaLocations = [
    "Ahmedabad","Allahabad","Bengaluru","Bhopal","Bhubaneswar","Chandigarh","Chennai",
    "Coimbatore","Dehradun","Delhi","Goa","Gurugram","Guwahati","Hubli","Hyderabad",
    "Indore","Jaipur","Jammu","Jodhpur","Kanpur","Kochi","Kolkata","Lucknow","Madurai",
    "Mangalore","Mohali","Mumbai","Mysuru","Nagpur","Nashik","New Delhi","Noida","Patna",
    "Pune","Raipur","Rajkot","Ranchi","Surat","Thiruvananthapuram","Trichy","Udaipur",
    "Vadodara","Varanasi","Vijayawada","Visakhapatnam"
  ];

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const message = 
      `*Workshop Registration*\n\n` +
      `Name: ${form.get("name")}\n` +
      `Phone: ${form.get("phone")}\n` +
      `Email: ${form.get("email")}\n` +
      `Interested In: ${form.get("domain")}\n` +
      `User Category: ${form.get("category")}\n` +
      `Location: ${form.get("location")}`;

    const whatsappURL = `https://wa.me/919848696422?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-pink-100 overflow-hidden"
        >
          {/* ---------- STATIC HEADER ---------- */}
          <div className="p-6 border-b border-slate-200 bg-white sticky top-0 z-20">
            <button
              onClick={onClose}
              className="absolute top-5 right-6 text-slate-500 hover:text-slate-800 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-extrabold text-slate-900">
              Join Free Workshop
            </h2>

            <p className="text-slate-600 mt-2 text-sm">
              Fill in the details — our team will contact you quickly!
            </p>
          </div>

          {/* ---------- SCROLLABLE FORM BODY ---------- */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}
              <div>
                <label className="text-sm text-slate-700 font-medium">Full Name</label>
                <input
                  name="name" required
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-slate-700 font-medium">Phone Number</label>
                <input
                  name="phone" required
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-700 font-medium">Email Address</label>
                <input
                  name="email" type="email" required
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Domain */}
              <div>
                <label className="text-sm text-slate-700 font-medium">Interested Domain</label>

                <div className="relative">
                  <select
                    name="domain" required
                    className="appearance-none mt-1 w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 shadow-sm bg-white focus:ring-2 focus:ring-pink-300"
                  >
                    <option value="">Select Domain</option>
                    {course.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>

                  {/* Dropdown arrow */}
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    ▼
                  </span>
                </div>
              </div>

              {/* User Category */}
              <div>
                <label className="text-sm text-slate-700 font-medium">You are a</label>

                <div className="relative">
                  <select
                    name="category" required
                    className="appearance-none mt-1 w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 shadow-sm bg-white focus:ring-2 focus:ring-pink-300"
                  >
                    <option value="">Select Category</option>
                    {userCategories.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    ▼
                  </span>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-sm text-slate-700 font-medium">Location</label>

                <div className="relative">
                  <select
                    name="location" required
                    className="appearance-none mt-1 w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 shadow-sm bg-white focus:ring-2 focus:ring-pink-300"
                  >
                    <option value="">Select Location</option>
                    {indiaLocations.map((loc, i) => (
                      <option key={i} value={loc}>{loc}</option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    ▼
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Send to WhatsApp
              </button>

            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
