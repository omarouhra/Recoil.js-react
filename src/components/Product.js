import { useRecoilState, useRecoilValue } from "recoil";
import { basketState, nummberOfItemInBasket } from "../atoms/basketState";

function Product({ title, price, id }) {
  const [basket, setBasket] = useRecoilState(basketState);

  const count = useRecoilValue(nummberOfItemInBasket(id));

  const addItemToBasket = () => {
    const item = {
      id,
      title,
      price,
    };

    setBasket([...basket, item]);
  };

  const removetemToBasket = () => {
    const index = basket.findIndex(item => item.id === id);
    let newBasket = [...basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    }

    setBasket(newBasket);
  };

  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={addItemToBasket}>+</button>
      <h2>{count}</h2>
      <button onClick={removetemToBasket}>-</button>
    </div>
  );
}

export default Product;
