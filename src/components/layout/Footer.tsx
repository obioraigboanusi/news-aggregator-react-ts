function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="py-2">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} NewsInnoscripts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
