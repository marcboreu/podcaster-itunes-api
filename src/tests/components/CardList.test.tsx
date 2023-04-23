import { render } from "@testing-library/react";
import { Episode, EpisodeIndex } from "../../types/types";
import { MemoryRouter } from "react-router-dom";
import CardList from "../../components/CardList";

describe("CardList component", () => {
  const mockEpisodeIndex: EpisodeIndex = {
    wrapperType: "mockWrapperType",
    kind: "mockKind",
    artistId: 1,
    collectionId: 1,
    trackId: 1,
    artistName: "mockArtistName",
    collectionName: "mockCollectionName",
    trackName: "mockTrackName",
    collectionCensoredName: "mockCollectionCensoredName",
    trackCensoredName: "mockTrackCensoredName",
    artistViewUrl: "mockArtistViewUrl",
    collectionViewUrl: "mockCollectionViewUrl",
    feedUrl: "mockFeedUrl",
    trackViewUrl: "mockTrackViewUrl",
    artworkUrl30: "mockArtworkUrl30",
    artworkUrl60: "mockArtworkUrl60",
    artworkUrl100: "mockArtworkUrl100",
    collectionPrice: 1,
    trackPrice: 1,
    collectionHdPrice: 1,
    releaseDate: "mockReleaseDate",
    collectionExplicitness: "mockCollectionExplicitness",
    trackExplicitness: "mockTrackExplicitness",
    trackCount: 1,
    trackTimeMillis: 1,
    country: "mockCountry",
    currency: "mockCurrency",
    primaryGenreName: "mockPrimaryGenreName",
    contentAdvisoryRating: "mockContentAdvisoryRating",
    artworkUrl600: "mockArtworkUrl600",
    genreIds: ["mockGenreId1", "mockGenreId2"],
    genres: ["mockGenre1", "mockGenre2"],
  };

  const mockEpisode: Episode = {
    country: "mockCountry",
    trackTimeMillis: 1,
    collectionViewUrl: "mockCollectionViewUrl",
    artistIds: [1, 2],
    feedUrl: "mockFeedUrl",
    closedCaptioning: "mockClosedCaptioning",
    collectionId: 1,
    collectionName: "mockCollectionName",
    genres: [
      {
        name: "genre",
        id: "1",
      },
    ],
    episodeGuid: "mockEpisodeGuid",
    description: "mockDescription",
    trackId: 1,
    trackName: "mockTrackName",
    releaseDate: "mockReleaseDate",
    trackViewUrl: "mockTrackViewUrl",
    artworkUrl60: "mockArtworkUrl60",
    artistViewUrl: "mockArtistViewUrl",
    contentAdvisoryRating: "mockContentAdvisoryRating",
    episodeContentType: "mockEpisodeContentType",
    artworkUrl600: "mockArtworkUrl600",
    episodeUrl: "mockEpisodeUrl",
    episodeFileExtension: "mockEpisodeFileExtension",
    artworkUrl160: "mockArtworkUrl160",
    previewUrl: "mockPreviewUrl",
  };

  const mockEpisodeList: Episode[] = [mockEpisode];

  const mockEpisodeIndexAndList: [EpisodeIndex, ...Episode[]] = [
    mockEpisodeIndex,
    ...mockEpisodeList,
  ];

  it("renders a list of episodes", () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardList episodesData={mockEpisodeIndexAndList} />
      </MemoryRouter>
    );

    expect(getByText("Episodes: 1")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Duration")).toBeInTheDocument();
    expect(mockEpisodeIndexAndList[0]).toEqual(mockEpisodeIndex);
    expect(mockEpisodeIndexAndList[1]).toEqual(mockEpisode);
    expect(mockEpisodeIndexAndList.length).toEqual(2);
  });
});
