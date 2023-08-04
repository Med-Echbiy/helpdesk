const Navbar = () => {
  const handleSignOut = () => {
    // Add your SignOut logic here
  };

  return (
    <>
      <nav
        id='setheader'
        className='navbar navbar-expand-lg navbar-light background--secondary sticky-navbar'
      >
        <div className='container-fluid'>
          <a
            className='navbar-brand d-flex gap-1 align-items-center text--primary'
            id='logourl'
            href='/'
          >
            <img
              id='setlogo'
              src='https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png'
              alt='Logo'
              style={{ height: "3rem" }}
            />
            &nbsp; <span>|</span> &nbsp;
            <span id='logotext_extension' className='opacity-75'>
              Help Center
            </span>
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul
              className='navbar-nav ms-auto mb-2 mb-lg-0 gap-4'
              id='header_links'
            >
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Discord
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li>

              <li className='nav-item'>
                <a className='btn btn-dark' type='button' href='#'>
                  Create Ticket
                </a>
              </li>
            </ul>

            <div className='logincontainer d-flex'>
              <div
                className='dropdown text-end notloggedin'
                id='login-link'
                data-bs-toggle='modal'
                data-bs-target='#Loginmodal'
                style={{ display: "none" }}
              >
                <a
                  type='button'
                  className='btn button--outline--primary ms-2 border-0 rounded-2'
                >
                  Login
                </a>
              </div>

              <div
                className='dropdown text-end loggedin'
                id='loggedin-section'
                style={{ display: "flex" }}
              >
                <a
                  href='#'
                  className='d-block link-dark text-decoration-none dropdown-toggle fs-6'
                  id='dropdownUser1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{
                    fontWeight: 800,
                    color: "#2b2f38",
                    padding: "4px 11px",
                    borderRadius: "6px",
                  }}
                >
                  <span className='userprofilepic'>
                    <img
                      src='https://lh3.googleusercontent.com/a/AEdFTp5HPFnBVeAVmWfUXoxtq9a4oJdTG9SM25qRFsGxOg=s96-c'
                      id='userprofilepic'
                      alt='mdo'
                      width='32'
                      height='32'
                      className='rounded-circle border border-secondary'
                      // onError={(e) => { e.target.src = 'https://pc-q.co.uk/wp-content/uploads/woocommerce-placeholder-416x416.png'; }}
                    />
                  </span>
                </a>
                <ul
                  className='dropdown-menu w-100 text-small'
                  aria-labelledby='dropdownUser1'
                >
                  <li>
                    <a
                      className='dropdown-item'
                      href='https://billing.stripe.com/p/login/8wMcNL4ureQIgGQbII'
                    >
                      Manage Billing
                    </a>
                  </li>

                  <li>
                    <a
                      className='dropdown-item'
                      href='/profile?tab=upvotes-chats'
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      href='/profile?tab=submitted-chats'
                    >
                      Feature Request
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      data-bs-toggle='modal'
                      data-bs-target='#Loginmodal'
                    >
                      Login Modal
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li
                  // onClick={handleSignOut}
                  >
                    <a className='dropdown-item' href='#'>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
