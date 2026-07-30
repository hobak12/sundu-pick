function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="상품 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          max-w-md
          px-4
          py-3
          border
          border-gray-300
          rounded-xl
          focus:outline-none
          focus:ring-2
          focus:ring-gray-300
        "
      />
    </div>
  );
}

export default SearchBar;