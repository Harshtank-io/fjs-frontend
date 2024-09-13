import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getFramework, postFrameworkRating } from "../api/frameworks";
import ReactStars from "react-stars";
import { PacmanLoader } from "react-spinners";

function Framework() {
  const { id } = useParams();
  const [framework, setFramework] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchFramework = async () => {
    try {
      setIsLoading(true);
      const response = await getFramework(id);

      setFramework(response.data);
    } catch (error) {
      console.error("Error fetching framework:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitRating = async () => {
    try {
      const newRating = { rating, comment };
      setFramework((prevFramework) => ({
        ...prevFramework,
        ratings: [...prevFramework.ratings, newRating],
      }));

      // API call moved after UI update
      await postFrameworkRating(id, rating, comment);

      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  useEffect(() => {
    fetchFramework();
  }, [id]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <PacmanLoader color="#FFFF00" size={50} />
      </div>
    );

  if (!framework) return <div>Framework not found</div>;

  return (
    <>
      <div className="container p-6 mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center w-full md:w-1/4">
            <img
              src={framework.logo}
              className="object-scale-down w-full h-48 mb-4"
              alt={`${framework.name} Logo`}
            />
            <h1 className="mb-2 text-2xl font-bold">{framework.name}</h1>
          </div>
          <div className="w-full md:w-3/4">
            <p className="mb-4 text-lg md:text-2xl">{framework.description}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
          <div className="mt-8 md:w-1/4 w-full">
            <h3 className="mb-4 text-xl font-semibold">Submit Your Rating</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <label className="text-lg">Rating:</label>
                <ReactStars
                  count={5}
                  value={rating}
                  onChange={(value) => {
                    setRating(value);
                  }}
                  size={30}
                  activeColor="#ffd700"
                  half={false}
                />
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-24 p-2 border border-gray-300 rounded-md"
                placeholder="Write your comment here..."
              ></textarea>
              <button
                onClick={submitRating}
                className="self-start px-4 py-2 text-yellow-400 bg-black border-2 rounded hover:bg-white"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="mt-8 md:w-3/4 w-full">
            <h3 className="mb-4 text-xl font-semibold">Ratings</h3>
            <div className="overflow-y-scroll h-96">
              {framework.ratings.length === 0 ? (
                <p>No ratings available.</p>
              ) : (
                <ul className="space-y-4">
                  {framework.ratings.map((apirating, index) => (
                    <li
                      key={index}
                      className="flex flex-col p-4 bg-gray-100 rounded shadow-sm"
                    >
                      <div className="flex items-center justify-between ">
                        <div>
                          <span className="text-lg">{apirating.user}</span>
                          <p className="text-gray-700">{apirating.comment}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-yellow-500">
                            {apirating.rating}/5
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Framework;
