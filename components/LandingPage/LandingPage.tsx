import React from "react";
import Link from "next/link";

const concepts = [
  { id: 1, name: "Node.js", slug: "nodejs" },
  { id: 2, name: "Java", slug: "java" },
  { id: 3, name: "Object-Oriented Programming", slug: "oop" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Interview Questions</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <Link href={`/concepts/${concept.id}`} key={concept.id}>

              <span className="flex items-center justify-center h-32 rounded-lg shadow-lg bg-white text-center transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                {concept.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
