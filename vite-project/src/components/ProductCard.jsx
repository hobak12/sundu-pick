function ProductCard({ image, name, price, link }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        width: "180px",
        textAlign: "center"
      }}
    >
      <div style={{ fontSize: "40px" }}>{image}</div>

      <div style={{ fontWeight: "bold", marginTop: "10px" }}>
        {name}
      </div>

      <div style={{ color: "gray", marginTop: "5px" }}>
        {price}원
      </div>

      <button
        style={{ marginTop: "10px" }}
        onClick={() => window.open(link)}
      >
        구매하기
      </button>
    </div>
  );
}

export default ProductCard;