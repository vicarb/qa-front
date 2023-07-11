'use client'
import { useState, useEffect } from 'react';

interface Item {
  id: number;
  question: string;
  answer: string;
}

function Landing() {
  const [data, setData] = useState<Item[] | null>(null);
  const [filteredData, setFilteredData] = useState<Item[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:8081/api/question-answers');
      // const res = await fetch('https://my-cloudrun-service-c2jkmf2kea-uw.a.run.app/api/question-answers');
      const json = await res.json();
      setData(json);
      setFilteredData(json);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filteredItems = data.filter((item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredItems);
    }
  }, [data, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-green-500 has text-center">Interview Questions</h1>

        <div className="pt-16">
          {filteredData ? (
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredData.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>

        <div className="fixed top-0 bg-white w-full py-4 px-6 z-10">
          <h1 className="text-3xl font-bold mb-8 text-green-500 has text-center">Interview Questions</h1>
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Search by question"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
