import React from "react";

import BackgroundCanvas from "./BackgroundCanvas";
import { cards } from "../namesOfAllah";

const QuranIntro = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BackgroundCanvas />

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="sticky top-0 max-w-6xl w-full px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Introduction to the Qur’an
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative group rounded-2xl p-[6px] bg-gradient-to-r from-purple-500 via-green-500 to-yellow-500 shadow-[0_0_20px_rgba(255,0,255,0.6)]"
              >
                {/* Inner card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
                  <div className="flex justify-center mb-4 text-4xl">
                    {card.icon}
                  </div>
                  <h3 className="text-xl text-gray-700 font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuranIntro;
