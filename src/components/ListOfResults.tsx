import LoaderPodcasts from "./LoaderPodcasts";
import PodcastItem from "./PodcastItem";
import { LOADER_PODCASTS_MAIN, NO_RESULTS_FOR } from "../utils/globals";
import { usePodcasts } from "../context/PodcastContext";
import { Podcast } from "../types/types";

const ListOfResults = () => {
  const { podcasts, loading, podcastsFiltered, searchTerm } = usePodcasts();

  const hasPodcastsFiltered = podcastsFiltered.length > 0;
  const hasTermSearch = searchTerm.length > 0;

  return (
    <div data-testid="list-of-results">
      <br />
      <br />
      {loading ? (
        <LoaderPodcasts text={LOADER_PODCASTS_MAIN} />
      ) : (
        <div className="podcasts-wrapper">
          {hasTermSearch && !hasPodcastsFiltered ? (
            <div>
              {NO_RESULTS_FOR}
              {searchTerm}
            </div>
          ) : null}
          {hasTermSearch && hasPodcastsFiltered ? (
            <ul className="podcasts">
              {podcastsFiltered.map(
                (podcast: Podcast) =>
                  podcast && (
                    <PodcastItem
                      id={podcast.id.attributes["im:id"]}
                      key={podcast.id.label}
                      author={podcast["im:artist"]}
                      song={podcast["im:name"]}
                      image={podcast["im:image"][2]}
                    />
                  )
              )}
            </ul>
          ) : null}
          {!hasTermSearch && (
            <ul className="podcasts">
              {podcasts.map(
                (podcast: Podcast) =>
                  podcast && (
                    <PodcastItem
                      id={podcast.id.attributes["im:id"]}
                      key={podcast.id.label}
                      author={podcast["im:artist"]}
                      song={podcast["im:name"]}
                      image={podcast["im:image"][2]}
                    />
                  )
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ListOfResults;
