
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Concept } from "@/interfaces/Concept/Concept";
import Spinner from "../Spinner/Spinner";

const LandingPage: React.FC<{ data: Concept[] }> = ({ data }) => {
  const uniqueCategories = new Set(data.map((concept) => concept.category));

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Interview Questions</h1>
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from(uniqueCategories).map((category) => (
            <Link href={`/concept/${category}`} key={category}>
              <span className="flex items-center justify-center text-slate-600 h-32 rounded-lg shadow-lg bg-white text-center transition-colors duration-300 font-semibold hover:bg-blue-500 hover:text-white text-lg">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;