
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-200 px-4 py-3 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
        
        {/* Texte de copyright */}
        <div className="text-night-blue text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Oumayma. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
