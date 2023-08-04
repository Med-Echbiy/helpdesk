import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" id="footer">
      <a className="navbar-brand d-flex gap-1 align-items-center" href="/">
        <img src="https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png" alt="Logo" id="footerlogo" style={{height: '30px'}}/>
        &nbsp;
        <span>|</span>
        &nbsp;
        <span id="footer_copyright_text" className="text--primary">© 2023 Company, Inc</span>
      </a>
      <ul className="nav col-md-4 justify-content-end" id="footer_links">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
    </footer>
     <footer className="nav" style={{justifyContent: 'center', marginBottom: '3rem'}}>
     <a className="navbar-brand d-flex bg-white gap-1" href="https://notionbear.com?ref=websitename" style={{border: '1px solid #3333', padding: '0.5rem 1rem', borderRadius: '1rem', fontSize: '1rem'}}>
       <span>Powered by</span>
       &nbsp;
       <img src="https://dazzling-cat.netlify.app/notionbear.svg" alt="Logo" style={{height: '2rem'}} />
     </a>
   </footer>
   </>
  );
};

export default Footer;