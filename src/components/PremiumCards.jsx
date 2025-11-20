import React, { useState } from "react";
import PremiumCard from "./PremiumCard.jsx";
import Modal from "./Modal.jsx";

const PROGRAMS = [
  {
    id: 'mern',
    title: 'MERN Fullstack',
    level: 'Intermediate → Advanced',
    duration: '120 hrs',
    price: '₹29,999',
    colorFrom: 'pink-400',
    colorTo: 'orange-400',
    project: 'E‑commerce App',
    topics: [
      'HTML5', 'CSS3', 'Flexbox & Grid', 'Responsive Design', 'Bootstrap 5',
      'JavaScript ES6+', 'Asynchronous JS, Fetch & Axios', 'DOM & Events',
      'React Basics', 'React Hooks', 'React Router', 'State Management', 'Context API',
      'Node.js & Express', 'REST APIs', 'Authentication (JWT)', 'File Uploads',
      'MongoDB & Mongoose', 'Aggregation & Indexes', 'Deployment (Heroku/Vercel)'
    ]
  },
  {
    id: 'mean',
    title: 'MEAN Enterprise',
    level: 'Intermediate → Advanced',
    duration: '140 hrs',
    price: '₹34,999',
    colorFrom: 'cyan-400',
    colorTo: 'lime-400',
    project: 'Project Management Tool',
    topics: [
      'Angular Fundamentals', 'Components', 'Modules', 'RxJS Basics', 'Services',
      'Routing & Guards', 'Forms (Reactive & Template)', 'State Management (NgRx)',
      'Node.js & Express', 'MongoDB', 'REST & GraphQL', 'Auth & Roles', 'Testing'
    ]
  },
  {
    id: 'react-boost',
    title: 'React Bootcamp',
    level: 'Beginner → Intermediate',
    duration: '60 hrs',
    price: '₹12,999',
    colorFrom: 'violet-400',
    colorTo: 'pink-300',
    project: 'Portfolio SPA',
    topics: [
      'JS Essentials', 'Components', 'Hooks Deep Dive', 'Routing', 'Forms', 'API Integration', 'Project'
    ]
  },
  {
    id: 'node-core',
    title: 'Node & APIs',
    level: 'Beginner → Intermediate',
    duration: '40 hrs',
    price: '₹8,999',
    colorFrom: 'yellow-300',
    colorTo: 'amber-400',
    project: 'REST API + Docs',
    topics: ['Node Basics', 'Express', 'Rest Api', 'Crud Operations']
  }
];

export default function PremiumCards(){
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  function show(program){
    setActive(program);
    setOpen(true);
  }

  return (
    <section id="courses" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-slate-900">Programs & Roadmaps</h3>
      <p className="text-slate-600 mt-2">Choose a path and see full syllabus inside each card.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map(p => (
          <PremiumCard key={p.id} program={p} onShow={show} />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} program={active || PROGRAMS[0]} />
    </section>
  );
}
