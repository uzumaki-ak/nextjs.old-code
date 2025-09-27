import React from "react";
import { games } from "@/data/game";
import Link from "next/link";

const GamePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Explore Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link key={game.id} href={`/gamess/${game.category}/${game.slug}`}>
            <div className="border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img className="w-full h-48 object-cover" src={game.image} alt={game.title} />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{game.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{game.description}</p>
                <p className="mt-2 text-yellow-500 font-semibold">⭐{game.rating}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
