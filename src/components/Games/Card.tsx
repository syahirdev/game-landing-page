import { Fade } from "react-reveal";

interface Props {
  title: string,
  image: string
}

export default function Card(props: Props) {
  return (
    <Fade bottom>
      <div className="bg-white text-center rounded-xl overflow-hidden max-w-xs sm:max-w-none mx-auto sm:mx-0">
        <img src={props.image} className="w-full"/>
        <p className="text-black py-3">{props.title}</p>
      </div>
    </Fade>
  );
}
