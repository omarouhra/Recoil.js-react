import { atom,  selectorFamily } from "recoil";

export const basketState = atom({
  key: "basketState",
  default: [],
});

export const nummberOfItemInBasket = selectorFamily({
  key: "nummberOfItemInBasket",
  get:
    itemId =>
    ({ get }) => {
      const basket = get(basketState);
      const basketWithItem = basket.filter(
        basketItem => basketItem.id === itemId
      );
      return basketWithItem.length;
    },
});
