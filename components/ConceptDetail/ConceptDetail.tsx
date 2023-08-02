'use client'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Params } from "@/interfaces/Params/Params";
import { Concept } from "@/interfaces/Concept/Concept";
import Spinner from "../Spinner/Spinner";

export const ConceptDetail = ({ params }: { params: Params }) => {
  const { id } = params;
  const [concept, setConcept] = useState(null);
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetchConcepts();
  }, []);

  const fetchConcepts = async () => {
    try {
      // const response = await axios.get("https://my-service5-52m34p25ra-uk.a.run.app/api/data");
      const response = await axios.get("http://127.0.0.1:8082/api/data");
      const data: Concept[] = response.data; // Define the type of 'data' explicitly as Concept[]
  
      // Filter the data based on the 'category' provided by the 'id' parameter
      const filteredConcepts = data.filter((item) => item.category === id);
  
      if (filteredConcepts.length > 0) {
        setConcepts(filteredConcepts);
      } else {
        console.error("No concepts found with Category:", id);
      }
    } catch (error) {
      console.error("Error fetching concepts:", error);
    } finally {
      setLoading(false); // Set loading to false, regardless of success or failure
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center">{id}</h1>
          {loading ? (
            // Show the spinner when loading is true
            <Spinner />
          ) : concepts.length > 0 ? (
            concepts.map((concept) => (
              <div key={concept._id}>
                <h2 className="text-xl font-semibold">{concept.question}</h2>
                <p className="text-gray-800 mb-4 whitespace-pre-wrap">
                  {concept.answer}
                </p>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-800 text-center">
              No concepts found with Category: {id}
            </p>
          )}
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded absolute top-0 left-0 mt-4 ml-4"
            onClick={() => window.history.back()}
          >
            Go Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};
