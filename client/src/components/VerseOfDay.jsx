import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VerseOfDay() {
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/ayah/random")
      .then((res) => res.json())
      .then((data) => setVerse(data.data));
  }, []);

  if (!verse) return <p style={{ color: "white" }}>Loading verse...</p>;

  return (
    <motion.section
      className="verse-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">🌙 Verse of the Day</h2>
      <p className="arabic">{verse.text}</p>
      <p className="translation">Surah {verse.surah.englishName} - {verse.numberInSurah}</p>
    </motion.section>
  );
}
