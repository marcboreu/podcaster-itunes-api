import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { checkPodcastExistence, formatHttpsLinks } from "../utils/helpers";
import { PODCASTS_BY, PODCASTS_DESCRIPTION } from "../utils/globals";
import { Podcast } from "../types/types";

export const CardInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const podcastId = location.pathname.split("/")[2];

  useEffect(() => {
    const podcastExist = checkPodcastExistence(podcastId);
    if (!podcastExist) {
      navigate("/");
    }
  }, [navigate, podcastId]);

  const localStoragePodcasts = JSON.parse(
    localStorage.getItem("podcasts") ?? '{"podcasts": []}'
  ) as { podcasts: Podcast[] };

  const podcast = localStoragePodcasts?.podcasts?.find(
    (podcast: Podcast) =>
      podcast && podcast.id.attributes["im:id"] === podcastId
  );

  if (!podcast) {
    return null;
  }

  return (
    <div className="podcast-page">
      <div className="card-info">
        <img
          src={podcast["im:image"][2].label}
          alt={podcast["im:name"].label}
        />
        <div className="main-text">
          <h3>{podcast["im:name"].label}</h3>
          <p>
            {PODCASTS_BY}
            {podcast["im:artist"].label}
          </p>
        </div>
        <div className="secondary-text">
          <h4>{PODCASTS_DESCRIPTION}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: formatHttpsLinks(podcast.summary.label),
            }}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CardInfo;
