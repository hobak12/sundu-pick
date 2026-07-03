import ProductCard from "./components/ProductCard";
import { products } from "./api/products";
import Header from "./components/Header";

function App() {
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