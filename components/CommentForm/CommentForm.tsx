'use client'
import React, { useState } from "react";
import axios from "axios";

interface CommentFormProps {
  conceptId: string; // Replace 'string' with the appropriate type for conceptId
}

const CommentForm = ({ conceptId }: CommentFormProps) => {
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!comment.trim()) {
      return; // Do not submit empty comments
    }
  
    setSubmitting(true);
  
    try {
      await axios.post("http://127.0.0.1:8082/api/comments", {
        conceptId,
        comment,
      });
  
      setComment("");
      // You could also trigger a refetch of comments here
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full px-3 py-2 border rounded"
          rows={4}
          placeholder="Enter your comment or question..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={submitting}
        ></textarea>
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
