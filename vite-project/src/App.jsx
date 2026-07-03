import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "./api/productsApi";
import Header from "./components/Header";

function App() {
  
  const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts().then((data) => {
    setProducts(data);
  });
}, []);


  return (
    <div> 
      <Header/>
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "50px",
        flexWrap: "wrap"
      }}
    >
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          link={item.link}
        />
      ))}
    </div>
    </div>
  );
}

export default App;