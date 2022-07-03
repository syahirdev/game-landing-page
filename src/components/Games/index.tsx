import Card from "./Card";
import game_data from "../../data/game.json";

export default function Games() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16 space-y-10">
      <h3 className="text-3xl">Featured games</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {game_data.data.map((game, index) => (
          <Card key={index} title={game.name} image={game.imageUrl}/>
        ))}
      </div>
    </div>
  );
}
