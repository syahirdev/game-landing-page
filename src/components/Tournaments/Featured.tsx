import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  tournaments: Tournament[]
}

export default function Featured({ title, tournaments }: Props) {
  return (
    <div className="space-y-5">
      {/*Header*/}
      <div className="flex justify-between items-center">
        <h3 className="text-3xl">{title}</h3>
        <button className="bg-white text-lupin-normal rounded-md px-8 py-2 shrink-0">View more</button>
      </div>

      {/*Contents*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-5">
        {tournaments.map((tournament, index) => (
          <Thumbnail key={index} tournament={tournament}/>
        ))}
      </div>
    </div>
  );
}
