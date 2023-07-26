'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

const LandingPage = () => {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    // Fetch concepts (interview question categories) from your API endpoint
    const fetchConcepts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8082/api/data");
        const data = await response.json();
        setConcepts(data);
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
          {concepts.map((concept) => (
            <Link href={`/concept/${concept._id}`} key={concept._id}>
              <span className="flex items-center justify-center h-32 rounded-lg shadow-lg bg-white text-center transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                {concept.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
