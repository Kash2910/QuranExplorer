import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function Home() {
  const [chapters, setChapters] = useState([]);
  const listRef = useRef(null);
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    axios.get(`${baseURL}/api/chapters`)
      .then(res => {
        console.log("Fetched chapters:", res.data);
        setChapters(res.data.chapters);
      })
      .catch(err => {
        console.error("Error fetching chapters:", err);
      });
  }, []);

  useEffect(() => {
    if (chapters.length > 0 && listRef.current) {
      gsap.from(listRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
      });
    }
  }, [chapters]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quran Chapters</h1>
      {chapters.length === 0 ? (
        <p className="text-gray-500">Loading chapters...</p>
      ) : (
        <ul ref={listRef}>
          {chapters.map(ch => (
            <li key={ch.id} className="mb-2">
              <Link to={`/chapter/${ch.id}`} className="text-blue-600 hover:underline">
                {ch.name} ({ch.revelation_place})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
