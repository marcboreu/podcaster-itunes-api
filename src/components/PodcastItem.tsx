import { Link } from "react-router-dom";
import { PODCASTS_AUTHOR } from "../utils/globals";

interface PodcastItemProps {
  image: { label: string };
  song: { label: string };
  author: { label: string };
  id: string;
}

const PodcastItem = ({ image, song, author, id }: PodcastItemProps) => {
  return (
    <Link to={`/podcast/${id}`}>
      <li className="podcast">
        <img src={image.label} alt={author.label} />
        <div className="podcast-content">
          <h4>{song.label}</h4>
          <p>{PODCASTS_AUTHOR}{author.label}</p>
        </div>
      </li>
    </Link>
  );
};

export default PodcastItem;
