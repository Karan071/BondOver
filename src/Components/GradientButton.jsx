export default function GradientButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`gbtn button SubmitBtn`}
    >
      {children}
    </button>
  );
}