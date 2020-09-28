import create from "zustand";

import api from "./api";

export default create((set) => ({
  pokemon: null,
  status: "init",
  shuffle: async () => {
    set(() => ({status: "pending"}));

    try {
      const pokemon = await api.shuffle();

      set(() => ({pokemon, status: "resolved"}));
    } catch (error) {
      set(() => ({status: "rejected"}));
    }
  },
}));
