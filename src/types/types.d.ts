export type Podcast = {
    "im:name": {
      label: string;
    };
    "im:image": {
      label: string;
      attributes: {
        height: string;
      };
    }[];
    summary: {
      label: string;
    };
    "im:price": {
      label: string;
      attributes: {
        amount: string;
        currency: string;
      };
    };
    "im:contentType": {
      attributes: {
        term: string;
        label: string;
      };
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    link: {
      attributes: {
        rel: string;
        type: string;
        href: string;
      };
    };
    id: {
      label: string;
      attributes: {
        "im:id": string;
      };
    };
    "im:artist": {
      label: string;
      attributes: {
        href: string;
      };
    };
    category: {
      attributes: {
        "im:id": string;
        term: string;
        scheme: string;
        label: string;
      };
    };
    "im:releaseDate": {
      label: string;
      attributes: {
        label: string;
      };
    };
} | null;
  
type PodcastsLocalStorage = {
    podcasts: Podcast[];
    regularDate: string;
    timestamp: number;
};

  

export type PodcastDetailsLocalStorage = {
    podcast: [EpisodeIndex, ...Episode[]];
    podcastDetailsId: number;
    regularDate: string;
    timestamp: number;
} | null;

export type EpisodeIndex = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
};

type Genre = {
  name: string;
  id: string;
};

export type Episode = {
  country: string;
  trackTimeMillis: number;
  collectionViewUrl: string;
  artistIds: number[];
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: Genre[];
  episodeGuid: string;
  description: string;
  trackId: number;
  trackName: string;
  releaseDate: string;
  trackViewUrl: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  episodeContentType: string;
  artworkUrl600: string;
  episodeUrl: string;
  episodeFileExtension: string;
  artworkUrl160: string;
  previewUrl: string;
} | null;
