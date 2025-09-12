import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-white py-8 px-4 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-2">Quran Explorer</h4>
          <p className="text-sm text-gray-400">
            Illuminating hearts through divine words. Explore, reflect, and grow
            spiritually.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Kash2910"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithubSquare className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-kashif-siddiqui/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Quran Explorer. All rights reserved.
      </div>
    </footer>
  );
}
