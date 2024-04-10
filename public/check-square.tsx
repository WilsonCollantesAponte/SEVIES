function CheckSquareSVG({
  stroke,
  width,
  height,
}: {
  stroke?: string;
  width?: string | number;
  height?: string | number;
}) {
  return (
    <svg
      //   class="with-icon_icon__MHUeb"
      data-testid="geist-icon"
      fill="none"
      width={width ?? 24}
      height={height ?? 24}
      shapeRendering="geometricPrecision"
      stroke={stroke || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      //   style="color:var(--geist-foreground);width:24px;height:24px"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

export default CheckSquareSVG;
