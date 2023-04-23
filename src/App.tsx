import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PodcastProvider } from "./context/PodcastContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import CardInfo from "./components/CardInfo";
import PodcastId from "./pages/PodcastId";
import EpisodeId from "./pages/EpisodeId";
import NotFound from "./pages/404";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <PodcastProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<CardInfo />}>
            <Route path="/podcast/:podcastId" element={<PodcastId />} />
            <Route
              path="/podcast/:podcastId/episode/:episodeId"
              element={<EpisodeId />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PodcastProvider>
    </BrowserRouter>
  );
};

export default App;
