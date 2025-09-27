import { games } from "@/data/game";
import React from "react";
import { FaStar } from "react-icons/fa";

const MainGamePage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const [category, gameSlug] = slug;
  // You can use the category and gameSlug to fetch the specific game data from your API or data source.

  const game = games.find(
    (game) => game.category === category && game.slug === gameSlug
  );

  if (!game) {
    return <div className="text-center text-xl font-semibold">Game not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <img className="w-full h-72 object-cover rounded-lg shadow-md" src={game.image} alt={game.title} />
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900">{game.title}</h1>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-lg text-green-700">{game.description}</p>
        <div className="flex items-center space-x-2 text-yellow-500">
          <FaStar />
          <span className="text-lg font-semibold">{game.rating}/10</span>
        </div>
      </div>
    </div>
  );
};

export default MainGamePage;
