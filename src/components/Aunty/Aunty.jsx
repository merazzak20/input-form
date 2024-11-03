import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name={"cd"}></Cousin>
        <Cousin name={"de"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add money 1000</button>
    </div>
  );
};

export default Aunty;
