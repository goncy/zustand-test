export default {
  shuffle: () =>
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * (151 - 1) + 1)}`,
    ).then((res) => res.json()),
};
