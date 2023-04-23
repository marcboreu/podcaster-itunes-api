import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { EXPIRETIME } from "../utils/globals";
import { Podcast } from "../types/types";
import { URL_TOP_PODCASTS } from "../services/services";

type PodcastContextProps = {
  podcasts: Podcast[];
  loading: boolean;
  podcastsFiltered: Podcast[];
  handleSearch: (searchTerm: string) => void;
  searchTerm: string;
};

const PodcastContext = createContext<PodcastContextProps>({
  podcasts: [],
  loading: true,
  podcastsFiltered: [],
  handleSearch: () => {},
  searchTerm: "",
});

type PodcastProviderProps = {
  children: ReactNode;
};

export const PodcastProvider = ({ children }: PodcastProviderProps) => {
  const defaultPodcasts: Podcast[] = [];
  const podcastsFromLocalStorage = localStorage.getItem("podcasts");

  const [podcasts, setPodcasts] = useState<Podcast[]>(
    podcastsFromLocalStorage
      ? JSON.parse(podcastsFromLocalStorage).podcasts
      : defaultPodcasts
  );
  const [podcastsFiltered, setPodcastsFiltered] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const searchTermLower = searchTerm.toLowerCase();
    const filteredPodcasts = podcasts.filter((podcast) => {
      const title = podcast && podcast["im:name"].label.toLowerCase();
      const artist = podcast && podcast["im:artist"].label.toLowerCase();
      const regex = new RegExp(searchTermLower, "i");
      return title && regex.test(title) || artist && regex.test(artist);
    });
    setPodcastsFiltered(filteredPodcasts);
  };

  useEffect(() => {
    const podcastsFromLocalStorage = localStorage.getItem("podcasts");
    if (podcastsFromLocalStorage) {
      const { podcasts, timestamp } = JSON.parse(podcastsFromLocalStorage);
      setPodcasts(podcasts);
      if (Date.now() - timestamp <= EXPIRETIME) {
        setLoading(false);
        return;
      }
    }
    fetch(URL_TOP_PODCASTS)
      .then((response) => response.json())
      .then((data) => {
        const timestamp = Date.now();
        const regularDate = new Date(timestamp);
        localStorage.setItem(
          "podcasts",
          JSON.stringify({ podcasts: data.feed.entry, timestamp, regularDate })
        );
        setPodcasts(data.feed.entry);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <PodcastContext.Provider
      value={{ podcasts, loading, podcastsFiltered, handleSearch, searchTerm }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcasts = () => useContext(PodcastContext);
