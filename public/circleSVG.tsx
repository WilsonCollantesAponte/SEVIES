function CircleSVG({ color, size }: { color: string; size: string }) {
  return (
    <svg
      data-testid="geist-icon"
      fill={color}
      height={size}
      shapeRendering="geometricPrecision"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size}
    >
      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
    </svg>
  );
}

export default CircleSVG;
