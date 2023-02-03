import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonList } from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import style from "./styles.module.scss";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);

  return (
    <div className={style.home}>
      <header>
        <PokeballIconSmall />
        <div>
          <span>Pokedex</span>
        </div>
      </header>

      <PokemonList pokemonsUrls={pokemonsFiltered} />
    </div>
  );
};
