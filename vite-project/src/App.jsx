import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "./api/productsApi";
import Header from "./components/Header";

function App() {
  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  getProducts(search).then((data) => {
    setProducts(data);
  });
}, [search]);


  return (
    <div> 
      <Header/>
      <input
  type="text"
  placeholder="상품 검색"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
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