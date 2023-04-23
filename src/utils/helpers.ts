import {
  Podcast,
} from "../types/types";

/**
 * Transforms a date string into a formatted date string.
 * @param {string} dateString The date string to transform.
 * @returns {string} The formatted date string.
 */
export function transformDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

/**
 * Transforms a duration in milliseconds into a formatted duration string.
 * @param {number} milliseconds The duration in milliseconds to transform.
 * @returns {string} The formatted duration string.
 * @example
 * transformMilliseconds(60000) // '01:00'
 */
export function transformMilliseconds(milliseconds: number | null | undefined): string {
  if (milliseconds === undefined || milliseconds === null) return "--:--";
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

/**
 * Replaces all HTTPS links in a text with clickable <a> tags.
 * @param {string} text The text to format.
 * @returns {string} The formatted text with clickable <a> tags.
 */
export function formatHttpsLinks(text: string): string {
  const regex = /https:\/\/\S+/g;
  const regex2 = /(\b[\w-]+\.(?:com|org|net|edu|gov|mil|[A-Za-z]{2}))(?![\S])/g;
  const regex3 = /visit\s+(\S+[\s\S]*)/gi;
  return text
    .replace(regex, (match) => {
      return `<a href="${match}">${match}</a>`;
    })
    .replace(regex2, (match) => {
      return `<a href="http://${match}">${match}</a>`;
    })
    .replace(regex3, (match, p1) => {
      return `<a href="http://${p1}">${p1}</a>`;
    });
}

/**
 * Checks if a podcast exists in the localStorage.
 * @param {string} podcastId The podcast id to check.
 * @returns {boolean} True if the podcast exists in the localStorage, false otherwise.
 */
export function checkPodcastExistence(podcastId: string): boolean {
  const localStoragePodcasts = localStorage.getItem("podcasts");
  if (!localStoragePodcasts) {
    return false;
  }
  const podcastsOnLocalStorage: Podcast[] =
    JSON.parse(localStoragePodcasts).podcasts;
  return podcastsOnLocalStorage.some(
    (podcast: Podcast) =>
      podcast && podcast.id.attributes["im:id"] === podcastId
  );
}
