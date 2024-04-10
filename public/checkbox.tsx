function CheckboxSVG({
  width,
  height,
}: {
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      //   style="color:var(--geist-foreground);width:24px;height:24px"
    >
      <path d="M16.09 3H7.91A4.91 4.91 0 003 7.91v8.18A4.909 4.909 0 007.91 21h8.18A4.909 4.909 0 0021 16.09V7.91A4.909 4.909 0 0016.09 3z" />
    </svg>
  );
}

export default CheckboxSVG;
