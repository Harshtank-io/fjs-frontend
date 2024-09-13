import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Framework() {
  const { id } = useParams();
  const [framework, setFramework] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`/frameworks/${id}`)
      .then((response) => setFramework(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const submitRating = () => {
    axios
      .post(`http://localhost:5000/api/frameworks/${id}/rating`, {
        user: "fjs",
        rating,
        comment,
      })
      .then((response) => {
        setFramework({
          ...framework,
          ratings: [...framework.ratings, response.data],
        });
      })
      .catch((error) => console.log(error));
  };

  if (!framework) return <div>Loading...</div>;

  return (
    <div>
      <h1>{framework.name}</h1>
      <p>{framework.description}</p>
      <h3>Ratings</h3>
      <ul>
        {framework.ratings.map((rating, index) => (
          <li key={index}>
            <strong>{rating.user}</strong>: {rating.rating}/5 - {rating.comment}
          </li>
        ))}
      </ul>
      <h3>Submit Rating</h3>
      <div>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button onClick={submitRating}>Submit</button>
      </div>
    </div>
  );
}

export default Framework;
