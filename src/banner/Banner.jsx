import React, { useState } from "react";
import vectorBg from "../assets/vector1.png";

const Banner = ({ progressTaskCount, resolveTaskCount }) => {
  return (
    <div className="grid max-w-11/12 mx-auto md:grid-cols-2 gap-4 p-4">
      {/* In-Progress Card */}
      <div
        className="relative overflow-hidden rounded-xl h-50 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${vectorBg}), linear-gradient(to bottom right, #7c3aed, #a855f7)`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay", // এটি ইমেজ ও কালারকে ব্লেন্ড করবে
        }}
      >
        <p className="text-xl font-medium opacity-90">In-Progress</p>
        <h2 className="text-6xl font-bold mt-2">{progressTaskCount}</h2>
      </div>

      {/* Resolved Card */}
      <div
        className="relative overflow-hidden rounded-xl h-50  flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${vectorBg}), linear-gradient(to bottom right, #22c55e, #0d9488)`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <p className="text-xl font-medium opacity-90">Resolved</p>
        <h2 className="text-6xl font-bold mt-2">{resolveTaskCount}</h2>
      </div>
    </div>
  );
};

export default Banner;
