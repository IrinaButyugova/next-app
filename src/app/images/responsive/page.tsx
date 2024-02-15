import Image from "next/image";
import mountains from "../../../../public/mountains.jpg";

const Responsive = () => (
  <div>
    <h1>Image Component With Layout Responsive</h1>
    <Image
      alt="Mountains"
      src={mountains}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  </div>
);

export default Responsive;