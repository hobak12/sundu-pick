function ProductCard({ image, name, link }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "16px",
        padding: "15px",
        width: "220px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}
    >
      {/* 상품 이미지 */}
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
          borderRadius: "12px"
        }}
      />

      {/* 상품명 */}
      <h3
        style={{
          fontSize: "16px",
          margin: "15px 0 10px",
          fontWeight: "bold"
        }}
      >
        {name}
      </h3>

      {/* 구매 버튼 */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          backgroundColor: "#ff6b6b",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        🛒 구매하기
      </a>
    </div>
  );
}

export default ProductCard;