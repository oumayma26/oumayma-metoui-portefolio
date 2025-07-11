
export default function Button({ children, href, onClick, type = null }) {
  const commonClasses =
    "bg-night-blue  px-4 py-2 rounded hover:bg-sky-blue transition text-white";

  if (type == null) {
    return (
      <a
        href={href}
        // className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  console.log('button--');
  
  return (
    <button type={type} onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
}
