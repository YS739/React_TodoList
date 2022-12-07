function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "black" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default CustomButton;
