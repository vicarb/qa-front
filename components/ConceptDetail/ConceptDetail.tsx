'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Params } from "@/interfaces/Params/Params";
import { Concept } from "@/interfaces/Concept/Concept";
import Spinner from "../Spinner/Spinner";
import CommentForm from "../CommentForm/CommentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export const ConceptDetail = ({ params }: { params: Params }) => {
  const { id } = params;
  const [concept, setConcept] = useState(null);
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [loading, setLoading] = useState(true);
  const [likesAndDislikes, setLikesAndDislikes] = useState({});

  useEffect(() => {
    fetchConcepts();
    const initialLikesAndDislikes = {};
    concepts.forEach((concept) => {
      initialLikesAndDislikes[concept._id] = {
        likes: 0,
        dislikes: 0,
      };
    });
    setLikesAndDislikes(initialLikesAndDislikes);
  }, []);

  const fetchConcepts = async () => {
    try {
      const response = await axios.get("https://my-service5-52m34p25ra-uk.a.run.app/api/data");
      const data: Concept[] = response.data;

      const filteredConcepts = data.filter((item) => item.category === id);

      if (filteredConcepts.length > 0) {
        setConcepts(filteredConcepts);
      } else {
        console.error("No concepts found with Category:", id);
      }
    } catch (error) {
      console.error("Error fetching concepts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (questionId) => {
    setLikesAndDislikes((prev) => ({
      ...prev,
      [questionId]: {
        likes: !prev[questionId]?.likes ? 1 : 0,
        dislikes: 0,
      },
    }));
  };

  const handleDislike = (questionId) => {
    setLikesAndDislikes((prev) => ({
      ...prev,
      [questionId]: {
        likes: 0,
        dislikes: !prev[questionId]?.dislikes ? 1 : 0,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center">{id}</h1>
          {loading ? (
            <Spinner />
          ) : concepts.length > 0 ? (
            concepts.map((concept) => (
              <div key={concept._id}>
                <h2 className="text-xl font-semibold">{concept.question}</h2>
                <p className="text-gray-800 mb-4 whitespace-pre-wrap">
                  {concept.answer}
                </p>
                <div className="flex space-x-4">
                  <button
                    className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded ${
                      likesAndDislikes[concept._id]?.likes ? "bg-green-600" : ""
                    }`}
                    onClick={() => handleLike(concept._id)}
                  >
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="mr-1"
                    />
                    Like ({likesAndDislikes[concept._id]?.likes || 0})
                  </button>
                  <button
                    className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded ${
                      likesAndDislikes[concept._id]?.dislikes ? "bg-red-600" : ""
                    }`}
                    onClick={() => handleDislike(concept._id)}
                  >
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      className="mr-1"
                    />
                    Dislike ({likesAndDislikes[concept._id]?.dislikes || 0})
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-800 text-center">
              No concepts found with Category: {id}
            </p>
          )}
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded absolute top-0 left-0 mt-4 ml-4"
            onClick={() => window.history.back()}
          >
            Go Back to Home Page
          </button>
        </div>
        <CommentForm conceptId={id} />
      </div>
    </div>
  );
};
