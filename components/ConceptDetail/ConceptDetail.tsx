'use client'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const ConceptDetail = ({ params }) => {
  const { id } = params;
  const [concept, setConcept] = useState(null);
  console.log("id", id);
  useEffect(() => {
    if (id) {
      fetchConcepts();
    }
  }, [id]);

  const fetchConcepts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8082/api/data");
      const data = response.data;

      // Filter the data based on the 'id' parameter
      const filteredConcept = data.find((item) => item.category === id);

      if (filteredConcept) {
        setConcept(filteredConcept);
      } else {
        console.error("Concept not found with ID:", id);
      }
    } catch (error) {
      console.error("Error fetching concepts:", error);
    }
  };
  console.log(concept);
  
  
  return (
    <div>ConceptDetail
    {concept && (
      <div>
        <h1>{concept.category}</h1>
        <h1>{concept.question}</h1>
        <h1>{concept.answer}</h1>
        </div>
    )}
    </div>
  )
}
