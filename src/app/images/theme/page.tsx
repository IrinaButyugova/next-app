import Image, { ImageProps } from "next/image";
import styles from "../styles.module.css";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className={styles.imgLight} />
      <Image {...rest} src={srcDark} className={styles.imgDark} />
    </>
  );
};

const Page = () => (
  <div>
    <h1>Image With Light/Dark Theme Detection</h1>
    <ThemeImage
      alt="Next.js Streaming"
      srcLight="https://assets.vercel.com/image/upload/front/nextjs/streaming-light.png"
      srcDark="https://assets.vercel.com/image/upload/front/nextjs/streaming-dark.png"
      width={588}
      height={387}
    />
  </div>
);

export default Page;