export const isDiscounted = (Price, discount) => {
  if (discount) {
    return (
      <div className="discount">
        <div className="text-md">
          <s>${Price}&nbsp;USD</s>
        </div>
        <div className="text-md">${Price - discount}&nbsp;USD</div>
      </div>
    );
  }
  return <div className="text-md">${Price}&nbsp;USD</div>;
};
