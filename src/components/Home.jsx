import React from "react";
import Data from "./Data";
import { games } from "./datas";
import "./Home.css"
function Home() {
  return (
    <div className="Home">
      <div className="cardlar">
      {games.map((item) => (
            <Data key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default Home;
