function CircleAlert() {
  return (
    <svg
      className="max-sm:scale-75"
      data-testid="geist-icon"
      width="50"
      height="50"
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="rgb(209 213 219)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
      <path d="M12 16v-4" stroke="var(--geist-stroke)" />
      <path d="M12 8h.01" stroke="var(--geist-stroke)" />
    </svg>
  );
}

export default CircleAlert;
