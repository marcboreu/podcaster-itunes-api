import { usePodcasts } from "../context/PodcastContext";
import { FILTER_PODCASTS, NUMBER_RESULTS } from "../utils/globals";

const Menu = () => {
  const { handleSearch, searchTerm } = usePodcasts();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <nav className="search">
      <span>{NUMBER_RESULTS}</span>
      <input
        onChange={handleChange}
        value={searchTerm}
        name="query"
        placeholder={FILTER_PODCASTS}
      />
    </nav>
  );
};

export default Menu;
