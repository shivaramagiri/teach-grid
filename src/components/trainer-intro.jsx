import React from "react";

const trainers = [
  {
    name: "Shiva Ramagiri",
    role: "Full-Stack Trainer (MERN / MEAN)",
    experience: "7+ Years Experience",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "NodeJS", "MongoDB"],
    photo: "https://i.imgur.com/4ZQZ4Yy.png", // replace with your real image
  },
  {
    name: "Rahul Verma",
    role: "Frontend Trainer (React / Angular)",
    experience: "6+ Years Experience",
    skills: ["React", "Angular", "Redux", "TypeScript", "UI/UX"],
    photo: "https://i.imgur.com/rH4kz6P.png",
  },
  {
    name: "Ananya Desai",
    role: "Backend Trainer (NodeJS / API Development)",
    experience: "5+ Years Experience",
    skills: ["NodeJS", "Express", "MongoDB", "SQL", "Microservices"],
    photo: "https://i.imgur.com/CxQJ9pK.png",
  },
];

export default function TrainerIntro() {
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
              <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
