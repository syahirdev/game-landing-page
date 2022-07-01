interface Props {
  title: string,
  image: string
}

export default function Card(props: Props) {
  return (
    <div className="bg-white text-center rounded-xl overflow-hidden">
      <img src={props.image}/>
      <p className="text-black font-bold py-3">{props.title}</p>
    </div>
  );
}
