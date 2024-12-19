import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashNav = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  // Handle Logout Logic
  const handleLogout = () => {
    // Clear token or any necessary session data
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand */}
      <a className="navbar-brand ps-3" href="/">Mruda Farm</a>

      {/* Sidebar Toggle */}
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
        <i className="fas fa-bars"></i>
      </button>

      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
          <button className="btn btn-primary" id="btnNavbarSearch" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {/* Navbar User */}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#!">Settings</a></li>
            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
            <li><hr className="dropdown-divider" /></li>
            {/* Logout Trigger */}
            <li>
              <a className="dropdown-item" onClick={() => setShowLogoutModal(true)}>Logout</a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="modal fade show" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="logoutModalLabel">Logout</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowLogoutModal(false)}></button>
              </div>
              <div className="modal-body">
                Are you sure you want to log out?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowLogoutModal(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashNav;
