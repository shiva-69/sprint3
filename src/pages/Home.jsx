import React from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [Loading, setLoading] = React.useState(true)

  const [list, setList] = React.useState([]);
  const {cartCount, handleCartCount} = React.useContext(CartContext);

  React.useEffect(()=>{
    getData();
  },[]);

  const getData =() => {
    fetch(`http://localhost:8080/products`)
    .then(res => res.json())
    .then(res => setList(res))
    .finally(()=>setLoading(false));
  }
  const handleChange= (val) => {
    handleCartCount(val);
  }
  return <div>
    {Loading ? <h1>Loading....</h1> : list.map((item) => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <h4>{item.description}</h4>
      <button onClick={()=>handleChange(+1)}>Increase Quantity</button>
      <button onClick={()=>handleChange(-1)}>Decrease Quantity</button>
    </div>
    ))
    
    }

  </div>;
};

export  {Home};
