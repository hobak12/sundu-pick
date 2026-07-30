import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { getProducts } from "./api/productsApi";

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
      <Header />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-6
          p-6
          justify-items-center
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;