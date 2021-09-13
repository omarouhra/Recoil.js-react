import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "./atoms/userState";
import "./App.css";
import { basketState } from "./atoms/basketState";
import Profile from "./components/Profile";
import Product from "./components/Product";

function App() {
  const [user, setUser] = useRecoilState(userState);
  const basket = useRecoilValue(basketState);

  const login = () => {
    setUser({
      name: "omar Ouhra",
    });
  };
  return (
    <div className='app'>
      <h1> Demo app</h1>
      {user ? (
        <h2>you are looged in as {user.name}</h2>
      ) : (
        <h2>you are looged out</h2>
      )}
      <button onClick={login}>Login</button>
      <Profile />
      <hr />

      <h2>Shopping App</h2>
      <h2>The total number of items in your basket : {basket.length}</h2>
      <Product id="1" title='sonny a6600' price='1600$' />
      <Product id='2' title='Ipad' price='1399$' />
    </div>
  );
}

export default App;
