import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFrameworks } from "../api/frameworks";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import Search from "../components/Search";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

function Home() {
  const [frameworks, setFrameworks] = useState([]);
  const [filteredFrameworks, setFilteredFrameworks] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); 

  const fetchFrameworks = async () => {
    try {
      const response = await getFrameworks();
      setFrameworks(response.data);
      setFilteredFrameworks(response.data);
    } catch (error) {
      setError("Failed to fetch frameworks.");
      console.error("Error fetching frameworks:", error);
    }
  };

  useEffect(() => {
    fetchFrameworks();
  }, []);

  const handleSearch = (query) => {
    const filtered = frameworks.filter((framework) =>
      framework.name.toLowerCase().includes(query.toLowerCase())
    );
    setQuery(query);
    setFilteredFrameworks(filtered);
  };

  const processRatings = (ratings) => {
    const counts = [0, 0, 0, 0, 0];
    ratings.forEach(({ rating }) => {
      if (rating >= 1 && rating <= 5) {
        counts[Math.floor(rating) - 1] += 1;
      }
    });
    return counts;
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-400">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="">
      <div className="flex items-center justify-between w-full">
        <h1 className="py-5 text-2xl font-bold transition-all duration-300 ease-in-out md:text-5xl hover:text-black">
          Frameworks
        </h1>
        <Search onSearch={handleSearch} />
      </div>
      {error && <p className="text-center text-red-500">{error}</p>}
      {filteredFrameworks.length === 0 && !error && (
        <p className="text-center">No frameworks found.</p>
      )}
      <div className="flex flex-wrap gap-2 justify-center h-[calc(100vh-100px)] my-auto overflow-y-scroll border-2 border-black rounded p-5">
        {filteredFrameworks.map((framework) => {
          const ratingCounts = processRatings(framework.ratings);

          const chartData = {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
              {
                label: framework.name,
                data: ratingCounts,
                backgroundColor: "black",
                borderColor: "yellow",
                borderWidth: 3,
                tension: 0.4,
              },
            ],
          };

          const options = {
            plugins: {
              legend: {
                display: false, 
              },
              tooltip: {
                callbacks: {
                  label: () => "", 
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "F Rating Scale",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Number of Ratings",
                },
                beginAtZero: true,
              },
            },
          };

          return (
            <div key={framework._id} className="max-w-xl mx-auto my-8 font-NA">
              <h2 className="text-2xl text-center">
                {highlightText(framework.name, query)}
              </h2>
              <Line data={chartData} options={options} />
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  to={`/framework/${framework._id}`}
                  className="block text-center hover:text-black"
                >
              <div className="py-2 mt-4 text-yellow-400 transition-all duration-300 ease-in-out bg-black border-2 border-black rounded hover:bg-white hover:text-black">
                  View Details
              </div>
                </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
