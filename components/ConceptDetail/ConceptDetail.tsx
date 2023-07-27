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
      <div className="max-w-md mx-auto">
        {concepts.map((concept) => (
          <div key={concept._id} className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h1 className="text-3xl font-bold mb-4">{concept.category}</h1>
            <p className="text-lg text-gray-800 mb-6">{concept.question}</p>
            <p className="text-base text-gray-600">{concept.answer}</p>
          </div>
        ))}
        {concepts.length === 0 && (
          <p className="text-lg text-gray-800">No concepts found with Category: {id}</p>
        )}
      </div>
    </div>
  );
};
