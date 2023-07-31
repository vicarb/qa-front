'use client'
import React, { useState } from "react";
import axios from "axios";
import { Concept } from "@/interfaces/Concept/Concept";
// Assuming the Concept interface is defined as you provided


const AdminComponent = () => {
  const [formData, setFormData] = useState<Concept>({

    category: "",
    question: "",
    answer: "",
    seniority: "Midlevel",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://my-service5-52m34p25ra-uk.a.run.app/api/data",
        formData
      );

      console.log("Data posted successfully:", response.data);

      // Clear form after successful submission
      setFormData({

        category: "",
        question: "",
        answer: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Concept</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category" className="block font-medium">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="question" className="block font-medium">
            Question:
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="answer" className="block font-medium">
            Answer:
          </label>
          <textarea
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminComponent;
