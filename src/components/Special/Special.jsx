import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Special</h3>
      <p>has: {asset}</p>
      <p>Also has: {gift}</p>
    </div>
  );
};

export default Special;
