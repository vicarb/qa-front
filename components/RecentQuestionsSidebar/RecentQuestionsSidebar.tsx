'use client'

// RecentQuestionsSidebar.tsx
import React, { useState, useEffect } from 'react';

const RecentQuestionsSidebar: React.FC = () => {
  const mockRecentQuestions = [
    'What is Big O notation?',
    'Explain event delegation in JavaScript',
    'Describe CORS',
    'What is memoization?',
    'How do you reverse a linked list?',
  ];

  const [recentQuestions, setRecentQuestions] = useState<string[]>([]);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    // Simulate an API call with a 2-second delay
    setTimeout(() => {
      setRecentQuestions(mockRecentQuestions);
    }, 2000);
  }, []);

  return (
    <>
    <button
    className="lg:hidden fixed right-4 bottom-4 z-50 p-2 rounded-full shadow"
    onClick={() => setShowSidebar(!showSidebar)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
  
      <div className={`fixed right-0 top-0 h-full bg-blue-200 w-64 p-4 shadow-lg overflow-y-auto transform transition-transform duration-300 ${showSidebar || 'translate-x-64'} lg:translate-x-0`}>
        <h3 className="text-xl text-slate-600 font-semibold mb-4 border-b pb-2">Recently Added Questions</h3>
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
    </>
  );
};

export default RecentQuestionsSidebar;
