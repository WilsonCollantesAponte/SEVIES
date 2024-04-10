function Alert() {
  return (
    <svg
      data-testid="geist-icon"
      height="24"
      fill="#ee453c"
      shapeRendering="geometricPrecision"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        fill="var(--geist-fill)"
      />
      <path d="M12 9v4" stroke="var(--geist-stroke)" />
      <path d="M12 17h.01" stroke="var(--geist-stroke)" />
    </svg>
  );
}

export default Alert;
