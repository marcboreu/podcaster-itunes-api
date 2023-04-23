import { FC } from "react";

interface Props {
  text: string;
}

const LoaderPodcasts: FC<Props> = ({ text }) => {
  return (
    <div className="loader-wrapper">
      <span>{text}</span>
      <div className="loader-podcasts">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default LoaderPodcasts;
