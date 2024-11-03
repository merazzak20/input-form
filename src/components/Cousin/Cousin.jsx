import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContext } from "../GrandPa/GrandPa";

const Cousin = ({ name, asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Cousin</h3>
      <p>{name}</p>
      <section>{asset && <Special asset={asset}></Special>}</section>
      <section>{name === "cd" && "has: " + gift}</section>
    </div>
  );
};

export default Cousin;
