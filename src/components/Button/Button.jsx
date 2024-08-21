export default function Button({ label, onClick, tailwind, style, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      style={style}
      onClick={onClick}
      className={` ${tailwind} text-lg px-4 py-3 rounded-md hover:px-8`}
    >
      {label}
    </button>
  );
}
