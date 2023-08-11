'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Concept } from "@/interfaces/Concept/Concept";
import Spinner from "../Spinner/Spinner";

const LandingPage = () => {
  const [concepts, setConcepts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcepts = async () => {
      try {
        const response = await fetch("https://my-service5-52m34p25ra-uk.a.run.app/api/data");
        const data: Concept[] = await response.json();
        const uniqueCategories = new Set(data.map((concept) => concept.category));
        setConcepts(Array.from(uniqueCategories));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching concepts:", error);
        setLoading(false);
      }
    };

    fetchConcepts();
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Interview Questions</h1>
        {loading ? (
          // Center the Spinner component using flexbox properties
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((category) => (
              <Link href={`/concept/${category}`} key={category}>
                <span className="flex items-center justify-center h-32 rounded-lg shadow-lg bg-white text-center transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
