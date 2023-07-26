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
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    const response = await axios.get(`http://127.0.0.1:8082/api/data/${id}`);


    const data = response.data;
    setConcept(data);
    console.log("inside use effect",concept);

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
