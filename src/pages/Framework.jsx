// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { getFramework, postFrameworkRating } from "../api/frameworks";

// function Framework() {
//   const { id } = useParams();
//   const [framework, setFramework] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const fetchFramework = async () => {
//     try {
//       const response = await getFramework(id);
//       setFramework(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchFramework();
//   }, []);

//   const submitRating = async () => {
//     try {
//       const response = await postFrameworkRating(id, rating, comment);
//       setFramework({
//         ...framework,
//         ratings: [...framework.ratings, response.data],
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!framework) return <div>Loading...</div>;

//   return (
//     <>
//       <div className="flex justify-center w-full gap-5 my-5">
//         <div className="flex flex-col items-center justify-center w-1/4">
//           <img
//             src={framework.logo}
//             className="object-scale-down w-full h-full"
//             alt="Framework Logo"
//           />
//           <h1 className="text-xl">{framework.name}</h1>
//         </div>
//         <div className="w-3/4 text-xl">
//           <p>{framework.description}</p>
//         </div>
//       </div>
//       <div className="bg-green-500 ">
//         <h3>Ratings</h3>
//         <ul>
//           {framework.ratings.map((rating, index) => (
//             <li key={index}>
//               <strong>{rating.user}</strong>: {rating.rating}/5 -{" "}
//               {rating.comment}
//             </li>
//           ))}
//         </ul>
//         <h3>Submit Rating</h3>
//         <div>
//           <input
//             type="number"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             min="1"
//             max="5"
//           />
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           ></textarea>
//           <button onClick={submitRating}>Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Framework;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFramework, postFrameworkRating } from "../api/frameworks";

function Framework() {
  const { id } = useParams();
  const [framework, setFramework] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const fetchFramework = async () => {
    try {
      const response = await getFramework(id);
      setFramework(response.data);
    } catch (error) {
      console.error("Error fetching framework:", error);
    }
  };

  const submitRating = async () => {
    try {
      const response = await postFrameworkRating(id, rating, comment);
      console.log("Server Response:", response.data);

      setFramework((prevFramework) => ({
        ...prevFramework,
        ratings: [...prevFramework.ratings, response.data],
      }));
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  useEffect(() => {
    fetchFramework();
  }, []);

  if (!framework) return <div>Loading...</div>;

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="flex flex-col items-center w-full md:w-1/4">
          <img
            src={framework.logo}
            className="object-scale-down w-full h-48 mb-4"
            alt={`${framework.name} Logo`}
          />
          <h1 className="mb-2 text-2xl font-bold">{framework.name}</h1>
        </div>
        <div className="w-full md:w-3/4">
          <p className="mb-4 text-lg">{framework.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold">Ratings</h3>
        <ul className="space-y-4">
          {framework.ratings.map((rating, index) => (
            <li
              key={index}
              className="flex flex-col p-4 bg-gray-100 rounded shadow-sm"
            >
              <div className="flex items-center justify-between ">
                <div>
                  <span className="text-lg">{rating.user}</span>
                  <p className="text-gray-700">{rating.comment}</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-500">
                    {rating.rating}/5
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold">Submit Your Rating</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="text-lg">Rating:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="w-16 p-2 border border-gray-300 rounded-md"
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
    </div>
  );
}

export default Framework;
