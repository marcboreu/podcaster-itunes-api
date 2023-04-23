import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoaderPodcasts from "../components/LoaderPodcasts";
import CardList from "../components/CardList";
import { getEpisodesData } from "../services/services";
import { checkPodcastExistence } from "../utils/helpers";
import { EXPIRETIME, LOADER_PODCASTS_EPISODES } from "../utils/globals";
import {
  PodcastDetailsLocalStorage,
  Episode,
  EpisodeIndex,
} from "../types/types";

type PodcastDetails = {
  podcastDetailsId: number;
  podcast: any[];
  timestamp: number;
  regularDate: Date;
};

export const PodcastId = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const podcastId: string = location.pathname.split("/")[2];

  const defaultPodcastsDetailsArray: PodcastDetailsLocalStorage = null;
  const storedData = localStorage.getItem("podcastsDetailsArray");
  const parsedData = storedData ? JSON.parse(storedData) : null;
  const [podcastData, setPodcastData] = useState<PodcastDetailsLocalStorage>(
    parsedData || defaultPodcastsDetailsArray
  );

  const podcastExist: boolean = checkPodcastExistence(podcastId);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!podcastExist) {
      navigate("/");
    } else {
      const podcastsFromLocalStorage = localStorage.getItem(
        "podcastsDetailsArray"
      );
      if (podcastsFromLocalStorage) {
        const podcastDetailsArray = JSON.parse(podcastsFromLocalStorage);
        const index = podcastDetailsArray.findIndex(
          (podcast: { podcast: { trackId: number }[] }) =>
            podcast.podcast[0].trackId.toString() === podcastId
        );
        if (
          index !== -1 &&
          Date.now() - podcastDetailsArray[index].timestamp < EXPIRETIME
        ) {
          setPodcastData(podcastDetailsArray[index].podcast);
          setIsLoading(false);
          return;
        }
      }
      getEpisodesData(parseInt(podcastId))
        .then((episodes) => {
          const podcast = episodes;
          const timestamp = Date.now();
          const regularDate = new Date(timestamp);
          const podcastObject: PodcastDetails = {
            podcastDetailsId: podcast[0].trackId,
            podcast: podcast,
            timestamp,
            regularDate,
          };

          const podcastsFromLocalStorage: PodcastDetails[] = JSON.parse(
            localStorage.getItem("podcastsDetailsArray") ?? "[]"
          );

          const indexPodcastFoundedInArrayLocalStorage: number =
            podcastsFromLocalStorage.findIndex(
              (podcast) => podcast.podcast[0].trackId == podcastId
            );
          if (
            indexPodcastFoundedInArrayLocalStorage !== -1 &&
            timestamp -
              podcastsFromLocalStorage[indexPodcastFoundedInArrayLocalStorage]
                .timestamp <
              EXPIRETIME
          ) {
            setPodcastData(
              podcastsFromLocalStorage[
                indexPodcastFoundedInArrayLocalStorage
              ] as unknown as PodcastDetailsLocalStorage
            );
          } else {
            if (indexPodcastFoundedInArrayLocalStorage !== -1) {
              podcastsFromLocalStorage.splice(
                indexPodcastFoundedInArrayLocalStorage,
                1,
                podcastObject
              );
            } else {
              podcastsFromLocalStorage.push(podcastObject);
            }
            localStorage.setItem(
              "podcastsDetailsArray",
              JSON.stringify(podcastsFromLocalStorage)
            );
            setPodcastData(podcast);
          }
          setIsLoading(false);
        })
        .catch((error: any) => console.error(error));
    }
  }, [podcastExist, navigate, podcastId, EXPIRETIME]);

  const episodes = podcastData! as unknown as [EpisodeIndex, ...Episode[]];

  return (
    <>
      {isLoading ? (
        <LoaderPodcasts text={LOADER_PODCASTS_EPISODES} />
      ) : (
        <CardList episodesData={episodes} />
      )}
    </>
  );
};

export default PodcastId;
