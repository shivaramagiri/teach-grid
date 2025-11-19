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

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Meet Our Expert Trainers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
          >
            {/* Trainer Photo */}
            <div className="flex justify-center mb-6">
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              {trainer.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 text-center mt-1">
              {trainer.role}
            </p>

            {/* Experience */}
            <p className="text-sm text-blue-600 font-medium text-center mt-2">
              {trainer.experience}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {trainer.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button onClick={() => setSelectedTrainer(trainer)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg hover:scale-105 transition">
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
