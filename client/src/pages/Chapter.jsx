import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import gsap from 'gsap';
const baseURL = import.meta.env.VITE_API_URL;

function Chapter() {
  const { id } = useParams();
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/api/verses/${id}`).then(res => {
    setVerses(res.data.verses);
  });
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Verses</h2>
      <ul>
        {verses.map(v => (
          <li key={v.id} className="verse mb-2">
            <p className="text-gray-800">{v.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chapter;
