import Card from "../components/Card";
import tableau from "../images/tableau.svg";
import powerBi from "../images/power-bi.svg";
import microStrategy from "../images/microStrategy.svg";

const items = [
  {
    id: "1",
    image: tableau,
  },
  {
    id: 2,
    image: powerBi,
  },
  {
    id: 3,
    image: microStrategy,
  },
];

export function itemsMap() {
  return items.map((d) => <Card image={d.image} />);
}
