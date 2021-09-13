import { atom, selector } from "recoil";

export const quoteState = atom({
  key: "quoteState",
  default: null,
});

export const fetchQuote = selector({
  key: "fetchQuote",
  get: async ({ get }) => {
    const joke = await fetch("http://api.icndb.com/jokes/random")
      .then(res => res.json())
      .then(data => data.value.joke);
    return joke;
  },
});
