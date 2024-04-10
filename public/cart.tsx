function CartSVG({
  width,
  height,
}: {
  width?: string | number;
  height?: string | number;
}) {
  return (
    <svg
      // className="bg-white"
      data-testid="geist-icon"
      fill="none"
      width={height ?? 24}
      height={width ?? 24}
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

export default CartSVG;
