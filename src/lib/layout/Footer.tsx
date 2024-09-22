const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs text-black-200">
          {new Date().getFullYear()} -{' '}
          <a href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
            Liga Colaborativa dos Povos
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
