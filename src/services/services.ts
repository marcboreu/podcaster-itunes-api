import { Episode, EpisodeIndex } from "../types/types";
import { LIMIT_RESULTS } from "../utils/globals";

export const URL_BLOCK_CORS_ALLOW_ORIGINS_EPISODES = (
  podcastId: string
): string =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
  )}`;

export const URL_BLOCK_CORS_PROXY_CORS_EPISODES = (podcastId: number): string =>
  `https://proxy.cors.sh/https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`;

export const URL_TOP_PODCASTS: string = `https://itunes.apple.com/us/rss/toppodcasts/limit=${LIMIT_RESULTS}/genre=1310/json`;
export const getEpisodesData = async (podcastId: number): Promise<any> => {
  try {
    const response: Response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
      )}`
    );
    const data: any = await response.json();
    if (!response.ok) {
      throw new Error(data.contents || "Error fetching podcast episodes");
    }
    const episodes: [EpisodeIndex, Episode[]] = JSON.parse(
      data.contents
    ).results;
    return episodes;
  } catch (error) {
    console.error(error);
  }
};
