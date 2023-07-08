'use client'
import { useState, useEffect } from 'react';
interface Item {
  id: number;
  question: string;
  answer: string;
}

function Landing() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // const res = await fetch('http://127.0.0.1:8081/api/question-answers');
      const res = await fetch('https://my-cloudrun-service-c2jkmf2kea-uw.a.run.app/api/question-answers');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-green-500">My Blog</h1>

        {data ? (
          <div className="grid gap-8 lg:grid-cols-2">
            {data.map((item) => (
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
    </div>
  );
}

export default Landing;
