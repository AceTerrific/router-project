function Button({ color, handleClick, children, buttonType }) {
  return (
    <button type={buttonType} className={color} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
