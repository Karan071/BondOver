export default function GradientButton({ children, onClick, type = "button" , className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`gbtn button SubmitBtn ${className }`}
    >
      {children}
    </button>
  );
}