import { FC } from "react";
import Menu from "../components/Menu";
import ListOfResults from "../components/ListOfResults";


export const Home: FC = () => {
  return (
    <div className="home">
      <Menu />
      <ListOfResults />
    </div>
  );
};


export default Home