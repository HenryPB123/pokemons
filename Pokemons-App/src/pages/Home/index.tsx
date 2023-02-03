import React from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import style from "./styles.module.scss";

export const Home = () => {
  return (
    <div className={style.home}>
      <header>
        <PokeballIconSmall />
        <div>
          <span>Pokedex</span>
        </div>
      </header>
    </div>
  );
};
