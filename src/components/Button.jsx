
export default function Button({ children, href, onClick, type = null }) {
  const commonClasses =
    "bg-night-blue text-white px-6 py-3 rounded hover:bg-sky-600 transition";

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
