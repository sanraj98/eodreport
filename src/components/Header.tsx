import React from 'react';
import '../css/header.css';  // Adjust the path based on your actual project structure
import undraw from '../img/undraw_profile.svg';
import msplogo from '../img/MSP.png';

export const Header: React.FC<{}> = () => {
  return (
    <header>
       <nav className="navbar  sticky-top p-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand text-light lexend-deca">
                   <img className='img me-2' height={30} src={msplogo} alt="msplogo" />
                    <span> STAFF REPORTS</span>
                </div>

                <div className="d-">
                    <div className='dropdown no-arrow'>
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               
                                <img className="img-profile rounded-circle"
                                    src={undraw} style={{width :"45px", height :"45px"}} />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-person-fill me-2 text-grey"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-gear-fill me-2 text-grey"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-list-ul me-2 text-grey"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="bi bi-box-arrow-right me-2 text-grey"></i>
                                    Logout
                                </a>
                            </div>
                    </div>
                </div>
                
                <div className="offcanvas offcanvas-start" tab-index="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dark offcanvas</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

