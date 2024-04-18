function Close({ width, height, size, color, ...props }) {
  if (size) {
    width = size;
    height = size;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : width ? width : "19"}
      height={size ? size : height ? height : "19"}
      fill="none"
      viewBox="0 0 19 19"
    >
      <path
        fill={color ? color : "#000"}
        d="M18.722 17.377a.95.95 0 11-1.345 1.345L9.5 10.843l-7.877 7.879a.95.95 0 11-1.345-1.345L8.157 9.5.278 1.623A.95.95 0 111.623.278L9.5 8.157 17.377.278a.95.95 0 011.345 1.345L10.843 9.5l7.879 7.877z"
      ></path>
    </svg>
  );
}

export default Close;
