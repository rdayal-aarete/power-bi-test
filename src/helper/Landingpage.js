import Card from '../Components/Card';



const items = [
    {
      "id":"1",
      image: "file:///C:/Users/rray/Desktop/new/power-bi-test/public/power-bi.svg"
    
    },
    {
      id: 2,
      image: "../images/tableau.png",
      
    },
    {
      id: 3,
      image: require("../images/microStrategy.svg"),
      
    },
  ];

  export function itemsMap() {
    return items.map((d) => (
        <Card image={d.image} key={d.id}/>
    ));
  }
  