import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BackgroundCanvas from "./BackgroundCanvas";
import "../assets/SurahExplorer.css";

const SurahExplorer = () => {
  const [chapters, setChapters] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [open, setOpen] = useState(false);
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  useEffect(() => {
    fetch(`${baseURL}/api/chapters`)
      .then((res) => res.json()) 
      .then((data) => setChapters(data.chapters)) 
      .catch((err) => console.error("Error fetching chapters:", err));
  }, []);

  const handleViewSurah = async (chapter) => {
    setSelectedSurah(chapter);
    setOpen(true);

    try {
      const res = await fetch(`/api/verses/${chapter.id}`);
      const data = await res.json();
      setVerses(data.verses || []);
    } catch (err) {
      console.error("Error fetching verses:", err);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BackgroundCanvas />
      <section
        id="surah-explorer"
        className="min-h-screen w-full flex flex-col items-center justify-center py-12"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Surah Explorer</h2>

        <div className="flex flex-wrap justify-center mt-5 gap-18 w-full max-w-6xl">
          {chapters.map((chapter) => (
            <motion.div
              key={chapter.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center">
                  <img
                    src={
                      chapter.revelation_place === "madinah"
                        ? "/Prophet-mosque.jpg"
                        : "/Holy-Kaaba.jpg"
                    }
                    alt={chapter.revelation_place}
                    className="w-16 h-16 object-cover mb-3 rounded-full border"
                  />
                  <h3 className="text-2xl font-semibold">
                    {chapter.name_simple}
                  </h3>
                  <p className="text-4xl text-gray-500 italic">
                    {chapter.name_arabic}
                  </p>
                  <p className="text-gray-600">
                    🔢 Verses: {chapter.verses_count}
                  </p>
                  <p className="text-gray-600">
                    📍 Place:{" "}
                    {chapter.revelation_place.charAt(0).toUpperCase() +
                      chapter.revelation_place.slice(1)}
                  </p>
                  <p className="text-gray-600">
                    📜 Revelation Order: {chapter.revelation_order}
                  </p>
                  <p className="text-gray-600">
                    📖 Pages: {chapter.pages[0]} - {chapter.pages[1]}
                  </p>
                  <p className="text-gray-700 font-medium mt-2">
                    Translation: {chapter.translated_name?.name}
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => handleViewSurah(chapter)}
                  >
                    View Surah
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl max-h-[70vh] overflow-y-auto rounded-xl border border-gray-700 shadow-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              aria-label="Close"
            ></button>
            <DialogHeader>
              <DialogTitle className=" text-gray-600 text-center text-3xl">
                {selectedSurah?.name_simple} ({selectedSurah?.name_arabic})
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {verses.length > 0 ? (
                verses.map((verse) => (
                  <div key={verse.id} className="p-2 border-b">
                    <p className="text-lg font-arabic text-right">
                      {verse.text_arabic}
                    </p>
                    <p className="text-sm text-gray-700">{verse.translation}</p>
                  </div>
                ))
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/quran-icon-png-4.png"
                    alt="Quran Icon"
                    className="w-40 h-40 mb-4 animate-pulse"
                  />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    This Surah’s verses are hidden for now...
                  </h3>
                  <p className="text-gray-400 italic">
                    Try again later or explore another Surah.
                  </p>
                </motion.div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default SurahExplorer;
