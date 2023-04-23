import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import NotFound from "./pages/404";
import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import Home from "./pages/Home";
import PodcastId from "./pages/PodcastId";
import EpisodeId from "./pages/EpisodeId";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
