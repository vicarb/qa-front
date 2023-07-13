'use client'
import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

interface Item {
  id: number;
  question: string;
  answer: string;
  category: string;
}

function Landing() {
  const [data, setData] = useState<Item[] | null>(null);
  const [filteredData, setFilteredData] = useState<Item[]>([]); // Updated initial state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://127.0.0.1:8081/api/question-answers');
        // const res = await fetch('https://my-cloudrun-service-c2jkmf2kea-uw.a.run.app/api/question-answers');
        const json = await res.json();
        setData(json);
        setFilteredData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filteredItems = data.filter((item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (selectedCategory !== 'All') {
        const categoryFilteredItems = filteredItems.filter(
          (item) => item.category === selectedCategory
        );
        setFilteredData(categoryFilteredItems);
      } else {
        setFilteredData(filteredItems);
      }
    }
  }, [data, searchTerm, selectedCategory]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const categories = data ? Array.from(new Set(data.map((item) => item.category))) : [];

  const transitions = useTransition(filteredData, {
    from: { opacity: 0, transform: 'scale(0.95)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.95)' },
    trail: 100,
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-green-500 has text-center">Interview Questions</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-l py-2 px-4 w-full"
            placeholder="Search by question"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="border border-gray-300 rounded-r py-2 px-4 bg-white"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {filteredData.length > 0 ? ( // Check if filteredData has items before rendering
          <div className="grid gap-8 lg:grid-cols-2">
            {transitions(({ opacity, transform }, item) => (
              <animated.div
                style={{ opacity, transform }}
                key={item?.id}
                className="bg-white shadow rounded-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item?.question}</h3>
                  <p className="text-gray-700 mb-4">{item?.answer}</p>
                  <p className="text-gray-500">Category: {item?.category}</p>
                </div>
              </animated.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
