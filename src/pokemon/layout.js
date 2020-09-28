import React from "react";

import {useShuffle, useStatus} from "./hooks";

const PokemonLayout = ({children}) => {
  const shuffle = useShuffle();
  const status = useStatus();

  React.useEffect(() => {
    shuffle();
  }, [shuffle]);

  if (["init", "pending"].includes(status)) return <div>Cargando...</div>;

  return children;
};

export default PokemonLayout;
