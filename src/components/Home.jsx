import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import data from "../assets/datos/data.json";

const Home = () => {
  return (
    <>
      <Header />
      {/* <div className="grid-cols-3 gap-4 mt-10"> */}
      <div id="cards" className="flex justify-evenly mt-10 gap-4 flex-wrap">
        {data.map((dato, id) => {
          return (
            <div className="border-2 border-solid border-black" key={id}>
              <CardPizza
                nombre={dato.nombre}
                ingred={dato.ingredientes}
                precio={dato.precio}
                imagen={dato.img}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
