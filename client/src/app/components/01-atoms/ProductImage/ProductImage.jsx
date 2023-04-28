import React from "react";

const ProductImage = ({ src, alt, height, width }) => {
  const wrapperStyle = {
    height: `${height}px`,
    width: `${width}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const imgStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div style={wrapperStyle}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
};

export default ProductImage;
