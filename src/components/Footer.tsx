const Footer = () => {
  return (
    <footer className="bg-[#151A24] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LTD Logistique SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 