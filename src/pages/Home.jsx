import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFrameworks } from "../api/frameworks";

function Home() {
  const [frameworks, setFrameworks] = useState([]);

  const fetchFrameworks = async () => {
    try {
      const response = await getFrameworks();
      setFrameworks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFrameworks();
  }, []);

  return (
    <div className="h-screen">
      <h1>JS Frameworks</h1>
      <ul>
        {frameworks.map((framework) => (
          <li key={framework._id}>
            <Link to={`/framework/${framework._id}`}>{framework.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
