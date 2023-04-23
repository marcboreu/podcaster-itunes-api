import { Link, useLocation } from "react-router-dom";
import { transformDate, transformMilliseconds } from "../utils/helpers";
import {
  PODCASTS_EPISODES,
  PODCASTS_EPISODES_DATE,
  PODCASTS_EPISODES_DURATION,
  PODCASTS_EPISODES_TITLE,
} from "../utils/globals";
import { Episode, EpisodeIndex } from "../types/types";

interface Props {
  episodesData: [EpisodeIndex, ...Episode[]];
}

export const CardList: React.FC<Props> = ({ episodesData }) => {
  const location = useLocation();
  const podcastId = location.pathname.split("/")[2];
  const QtyOfEpisodes = episodesData && episodesData.length - 1;

  return (
    <div className="card-list">
      <div className="episodes-title">
        <h3>
          {PODCASTS_EPISODES}
          {QtyOfEpisodes}
        </h3>
      </div>
      <ul className="episodes">
        <li>
          <span className="episode">{PODCASTS_EPISODES_TITLE}</span>
          <span className="date">{PODCASTS_EPISODES_DATE}</span>
          <span className="duration">{PODCASTS_EPISODES_DURATION}</span>
        </li>
        {episodesData?.slice(1).map(
          (podcast, index) =>
            podcast && (
              <li
                key={podcast.trackId}
                className={`track-${index % 2 === 0 ? "even" : "odd"}`}
              >
                <span className="title-episode">
                  <Link
                    to={`/podcast/${podcastId}/episode/${podcast.trackId}`}
                    state={podcast}
                  >
                    {podcast.trackName}
                  </Link>
                </span>

                <span className="title-date">
                  {transformDate(podcast.releaseDate)}
                </span>
                <span className="title-duration">
                  {transformMilliseconds(podcast.trackTimeMillis)}
                </span>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CardList;
