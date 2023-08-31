'use client'

// RecentQuestionsSidebar.tsx
import React, { useState, useEffect } from 'react';

const RecentQuestionsSidebar: React.FC = () => {
  // Mock data for recent questions
  const mockRecentQuestions = [
    'What is Big O notation?',
    'Explain event delegation in JavaScript',
    'Describe CORS',
    'What is memoization?',
    'How do you reverse a linked list?',
  ];

  const [recentQuestions, setRecentQuestions] = useState<string[]>([]);

  useEffect(() => {
    // Simulate an API call with a 2-second delay
    setTimeout(() => {
      setRecentQuestions(mockRecentQuestions);
    }, 2000);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full bg-gray-100 w-64 p-4 shadow-lg overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">Recently Added Questions</h3>
      <ul className="space-y-2">
        {recentQuestions.length === 0 ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          recentQuestions.map((question, index) => (
            <li key={index} className="bg-white p-2 rounded shadow hover:bg-gray-200 transition duration-200">
              {question}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecentQuestionsSidebar;
