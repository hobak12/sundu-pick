function ProductCard({ image, name, link }) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-sm
        border
        border-gray-200
        p-4
        w-[180px]
        text-center
        transition
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <img
        src={image}
        alt={name}
        className="
          w-full
          h-[150px]
          object-cover
          rounded-lg
        "
      />

      <h3
        className="
          font-bold
          mt-3
          text-gray-800
          truncate
        "
      >
        {name}
      </h3>

      <button
        onClick={() => window.open(link, "_blank")}
        className="
          mt-4
          w-full
          bg-black
          text-white
          py-2
          rounded-lg
          text-sm
          hover:bg-gray-700
          transition
        "
      >
        구매하기
      </button>
    </div>
  );
}

export default ProductCard;