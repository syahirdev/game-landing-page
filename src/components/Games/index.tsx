import Card from "./Card";

export default function Games() {
  return (
    <div className="max-w-7xl mx-auto py-16 space-y-10">
      <h3 className="text-3xl">Featured games</h3>
      <div className="flex justify-between">
        <Card title="Valorant" image="assets/images/valorant.png"/>
        <Card title="League of Legends" image="assets/images/lol.png"/>
        <Card title="DOTA 2" image="assets/images/dota2.png"/>
        <Card title="CS:GO" image="assets/images/csgo.png"/>
      </div>
    </div>
  );
}
