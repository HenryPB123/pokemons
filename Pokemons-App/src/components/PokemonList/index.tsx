import { PokemonCard } from "../PokemonCard";
import styles from "./styles.module.scss";

interface Props {
  pokemonsUrls?: string[] | null;
  page?: number;
  perPage?: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <div className={styles.pokemons}>
      {pokemonsUrls?.map((pokeUrl) => (
        <PokemonCard key={pokeUrl} url={pokeUrl} />
      ))}
    </div>
  );
};
