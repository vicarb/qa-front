'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Concept } from "@/interfaces/Concept/Concept";
const LandingPage = () => {
  const [concepts, setConcepts] = useState<string[]>([]); // Define the type of 'concepts' as string[]

  useEffect(() => {
    // Fetch concepts (interview question categories) from your API endpoint
    const fetchConcepts = async () => {
      try {
        const response = await fetch("https://my-service5-52m34p25ra-uk.a.run.app/api/data");
        const data: Concept[] = await response.json(); // Define the type of 'data' explicitly as Concept[]

        // Extract unique interview question categories using a Set
        const uniqueCategories = new Set(data.map((concept) => concept.category));

        // Convert the Set back to an array and set it as the state
        setConcepts(Array.from(uniqueCategories));
        console.log("this is concepts",concepts);
        
      } catch (error) {
        console.error("Error fetching concepts:", error);
      }
    };

    fetchConcepts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Interview Questions</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((category) => (
            <Link href={`/concept/${category}`} key={category}>
              <span className="flex items-center justify-center h-32 rounded-lg shadow-lg bg-white text-center transition-colors duration-300 hover:bg-blue-500 hover:text-white">
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

