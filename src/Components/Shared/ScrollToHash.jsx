import { useEffect } from "react";




export default function ScrollToHash() {

function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return null;
}
  return (
    <div>
      
    </div>
  )
}
