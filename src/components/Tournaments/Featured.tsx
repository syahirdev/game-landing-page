import Thumbnail from "./Thumbnail";

interface Props {
  title: string
}

export default function Featured(props: Props) {
  return (
    <div className="space-y-5">
      {/*Header*/}
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-medium">{props.title}</h3>
        <button className="bg-white text-nz-purple font-medium rounded-md px-8 py-2">
          View more
        </button>
      </div>

      {/*Contents*/}
      <div className="flex gap-x-5">
        <Thumbnail
          title="Overwatch All-Stars 2021 Championship!!!"
          posterImage="assets/images/image 219-1-0.png"
          authorImage="assets/images/image-uploader.png"
          gameType="Single elimination"
          prize={400}
          endDate="Monday, Dec 11, 15:00"
        />
        <Thumbnail
          title="Overwatch All-Stars 2021 Championship!!!"
          posterImage="assets/images/image 219-1-1.png"
          authorImage="assets/images/image-uploader-1.png"
          gameType="Single elimination"
          prize={400}
          endDate="Monday, Dec 11, 15:00"
        />
        <Thumbnail
          title="Overwatch All-Stars 2021 Championship!!!"
          posterImage="assets/images/image 219-1-2.png"
          authorImage="assets/images/image-uploader-2.png"
          gameType="Single elimination"
          prize={400}
          endDate="Monday, Dec 11, 15:00"
        />
        <Thumbnail
          title="Overwatch All-Stars 2021 Championship!!!"
          posterImage="assets/images/image 219-1-3.png"
          authorImage="assets/images/image-uploader-3.png"
          gameType="Single elimination"
          prize={400}
          endDate="Monday, Dec 11, 15:00"
        />
      </div>
    </div>
  );
}
