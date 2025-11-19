import React from "react";

export default function Footer(){
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-slate-600">
      <div className="mb-4">© {new Date().getFullYear()} TeachGrid — Learn Smart, Code Smarter</div>
      <div className="text-sm">Terms • Privacy • Contact</div>
    </footer>
  );
}
