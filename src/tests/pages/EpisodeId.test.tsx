import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import EpisodeId from "../../pages/EpisodeId";

const mockLocation = {
  state: {
    trackName: "Test Podcast",
    description: "Test Description",
    episodeUrl: "https://example.com/test.mp3",
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockLocation,
}));

describe("EpisodeId component", () => {
  test("renders podcast information", () => {
    render(
      <MemoryRouter initialEntries={["/episode"]} initialIndex={0}>
        <Routes>
          <Route path="/episode" element={<EpisodeId />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Test Podcast")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByTestId("source-soundbar")).toHaveAttribute(
      "src",
      "https://example.com/test.mp3"
    );
  });
});
