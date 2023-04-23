import { render, screen } from "@testing-library/react";
import { PodcastId } from "../../pages/PodcastId";
import { MemoryRouter } from "react-router-dom";
import { LOADER_PODCASTS_EPISODES } from "../../utils/globals";

describe("EpisodeList component", () => {
  test("renders loader if no data is available", () => {
    render(
      <MemoryRouter>
        <PodcastId />
      </MemoryRouter>
    );
    expect(screen.getByText(LOADER_PODCASTS_EPISODES));
  });
});
