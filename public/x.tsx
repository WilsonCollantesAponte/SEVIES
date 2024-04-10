function X({ stroke }: { stroke?: string }) {
  return (
    <svg
      data-testid="geist-icon"
      fill="none"
      height="19"
      width="19"
      shapeRendering="geometricPrecision"
      stroke={stroke || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default X;
