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
<div className="max-w-5xl mx-auto px-4">
      <Header />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {products.length === 0 ? (
  <div className="py-12 text-center text-gray-500">
    <p className="text-lg font-medium">검색 결과가 없습니다.</p>
    <p className="mt-2 text-sm">
      다른 검색어를 입력해 보세요.
    </p>
  </div>
) : (
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
)}
    </div>
  );
}

export default App;