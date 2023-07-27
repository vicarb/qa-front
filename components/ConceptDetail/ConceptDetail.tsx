'use client'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const ConceptDetail = ({ params }) => {
  const { id } = params;
  const [concept, setConcept] = useState(null);
  const [concepts, setConcepts] = useState([]);
  console.log("id", id);
  useEffect(() => {
    fetchConcepts();
  }, []);

  const fetchConcepts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8082/api/data");
      const data = response.data;

      // Filter the data based on the 'category' provided by the 'id' parameter
      const filteredConcepts = data.filter((item) => item.category === id);

      if (filteredConcepts.length > 0) {
        setConcepts(filteredConcepts);
      } else {
        console.error("No concepts found with Category:", id);
      }
    } catch (error) {
      console.error("Error fetching concepts:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center">{id}</h1>
          {concepts.length > 0 ? (
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
      </div>
    </div>
  );
};
