import { FC } from "react";
import { useLocation } from "react-router-dom";
import { formatHttpsLinks } from "../utils/helpers";

interface EpisodeProps {}

const EpisodeId: FC<EpisodeProps> = () => {
  const location = useLocation();
  const podcast = location.state;

  return (
    <div className="episode">
      <p>{podcast.trackName}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: formatHttpsLinks(podcast.description),
        }}
      />
      <audio className="soundbar" controls>
        <source
          data-testid="source-soundbar"
          src={podcast.episodeUrl}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};
export default EpisodeId;
