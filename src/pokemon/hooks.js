import useStore from "./store";
import * as selectors from "./selectors";

export function usePokemon() {
  const pokemon = useStore(selectors.pokemon);

  return pokemon;
}

export function useShuffle() {
  const shuffle = useStore(selectors.shuffle);

  return shuffle;
}

export function useStatus() {
  const status = useStore(selectors.status);

  return status;
}
