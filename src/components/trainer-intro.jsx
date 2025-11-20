import React, { useState } from "react";
import TrainerModal from "./trainer-modal";
const images = import.meta.glob('/src/assets/trainers/*.{jpg,png}', { eager: true, as: 'url' });
function getImageUrl(filename) {
  const key = `/src/assets/trainers/${filename}`;
  return images[key] || '';
}
const trainers = [
  {
    name: "Shiva Ramagiri",
    role: "Full-Stack Trainer (MERN / MEAN)",
    experience: "10+ Years Experience",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Jquery", "Angular", "Angular Material", "Story Book","NGRX", "Rxjs", "Reactjs", "Redux", "NodeJS", "Expressjs", "MongoDB"],
    photo: getImageUrl("shiva_ramagiri.jpg"),
    linkedin: "https://www.linkedin.com/in/shiva-r-1452b9159",
    whatsapp: "9848696422",
    about:
      "With over 10 years of experience in full-stack development, Shiva specializes in building scalable web applications using MERN and MEAN technologies. He has successfully delivered multiple end-to-end projects and brings strong expertise in JavaScript frameworks, modern UI development, backend API creation, and database design. As a trainer, he focuses on hands-on learning, real-time project development, and helping students become job-ready in full-stack technologies."
  },

  {
    name: "Yakanna",
    role: "Python Trainer",
    experience: "10+ Years Experience",
    skills: [
      "Core Python",
      "Data Science",
      "Django & Flask Frameworks",
    ],
    photo: getImageUrl("yakanna.png"),
    linkedin: "https://www.linkedin.com/in/bolagani-yakanna-b43897131",
    whatsapp: "9848696422",
    about:
      "An experienced Python developer and instructor with over 10 years of industry expertise, specializing in Core Python, Django, Flask, and Data Science fundamentals. Yakanna has trained hundreds of students and working professionals in building strong programming foundations, backend application development, and data-driven solutions. His teaching style emphasizes clarity, practical examples, and building real-time applications that help learners gain confidence in Python."
  },

  {
    name: "Rajesh Ravi Kiran",
    role: "Career Guidance Coach / Career Mentor",
    experience: "25+ Years Experience",
    skills: [
      "Career Planning",
      "Interview Preparation",
      "Resume Building",
      "Communication"
    ],
    photo: getImageUrl("rajesh.png"),
    linkedin: "https://www.linkedin.com/in/rvaddiparthy",
    whatsapp: "9848696422",
    about:
      "Rajesh is a seasoned career mentor with 25+ years of experience guiding students and professionals toward successful career paths. He specializes in career planning, interview preparation, communication improvement, and resume-building techniques. His sessions are highly interactive and personalized, helping individuals identify their strengths, build confidence, and achieve career growth. Rajesh’s mentorship has transformed the journeys of many students entering the IT industry."
  },
];


export default function TrainerIntro() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (index) => {
  setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
};
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Meet Our Expert Trainers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {trainers.map((trainer, index) => (
//           <div
//             key={index}
//             className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
//           >
//             {/* Trainer Photo */}
//             <div className="flex justify-center mb-6">
//               <img
//                 src={trainer.photo}
//                 alt={trainer.name}
//                 className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="text-xl font-semibold text-gray-900 text-center">
//               {trainer.name}
//             </h3>

//             {/* Role */}
//             <p className="text-sm text-gray-500 text-center mt-1">
//               {trainer.role}
//             </p>

//             {/* Experience */}
//             <p className="text-sm text-blue-600 font-medium text-center mt-2">
//               {trainer.experience}
//             </p>

//             {/* Skills */}
//             {/* <div className="flex flex-wrap justify-center gap-2 mt-6">
//               {trainer.skills.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div> */}
//             {/* Skills */}
// <div className="mt-6 flex flex-wrap justify-center gap-2">
//   {(() => {
//     const maxVisible = 6; // approx 2 rows depending on screen size
//     const isExpanded = expanded[index];
//     const visibleSkills = isExpanded
//       ? trainer.skills
//       : trainer.skills.slice(0, maxVisible);

//     return (
//       <>
//         {visibleSkills.map((skill, i) => (
//           <span
//             key={i}
//             className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border"
//           >
//             {skill}
//           </span>
//         ))}

//         {/* Show the "..." button if hidden skills exist */}
//         {!isExpanded && trainer.skills.length > maxVisible && (
//           <button
//             onClick={() => toggleExpand(index)}
//             className="px-3 py-1 text-xs text-blue-600 font-semibold border rounded-full bg-white hover:bg-gray-100"
//           >
//             ...
//           </button>
//         )}

//         {/* Collapse button */}
//         {isExpanded && trainer.skills.length > maxVisible && (
//           <button
//             onClick={() => toggleExpand(index)}
//             className="px-3 py-1 text-xs text-red-600 font-semibold border rounded-full bg-white hover:bg-gray-100"
//           >
//             Show Less
//           </button>
//         )}
//       </>
//     );
//   })()}
// </div>


//             {/* Button */}
//             <div className="flex justify-center mt-8">
//               <button onClick={() => setSelectedTrainer(trainer)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg hover:scale-105 transition">
//                 View Profile
//               </button>
//             </div>
//           </div>
<div
  key={index}
  className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300"
>
  {/* Trainer Photo */}
  <div className="flex justify-center mb-4">
    <img
      src={trainer.photo}
      alt={trainer.name}
      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
    />
  </div>

  {/* Name */}
  <h3 className="text-xl font-bold text-gray-900 text-center">
    {trainer.name}
  </h3>

  {/* Role */}
  <p className="text-sm text-gray-600 text-center mt-1">
    {trainer.role}
  </p>

  {/* Experience */}
  <p className="text-sm text-indigo-600 font-medium text-center mt-1">
    {trainer.experience}
  </p>

  {/* Skills */}
  <div className="mt-5 flex flex-wrap justify-center gap-2 max-w-[260px] mx-auto text-center">
    {(() => {
      const maxVisible = 5;
      const isExpanded = expanded[index];
      const visibleSkills = isExpanded
        ? trainer.skills
        : trainer.skills.slice(0, maxVisible);

      return (
        <>
          {visibleSkills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full border shadow-sm"
            >
              {skill}
            </span>
          ))}

          {!isExpanded && trainer.skills.length > maxVisible && (
            <button
              onClick={() => toggleExpand(index)}
              className="px-3 py-1 text-xs text-blue-600 font-semibold border rounded-full bg-white hover:bg-gray-100 shadow-sm"
            >
              ...
            </button>
          )}

          {isExpanded && trainer.skills.length > maxVisible && (
            <button
              onClick={() => toggleExpand(index)}
              className="px-3 py-1 text-xs text-red-600 font-semibold border rounded-full bg-white hover:bg-gray-100 shadow-sm"
            >
              Show Less
            </button>
          )}
        </>
      );
    })()}
  </div>

  {/* Button */}
  <div className="flex justify-center mt-7">
    <button
      onClick={() => setSelectedTrainer(trainer)}
      className="px-5 py-2 rounded-xl text-sm font-semibold text-white
      bg-gradient-to-r from-indigo-500 to-pink-500
      shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition"
    >
      View Profile
    </button>
  </div>
</div>

        ))}
      </div>
       <TrainerModal
        open={!!selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        trainer={selectedTrainer}
      />
    </section>
  );
}
