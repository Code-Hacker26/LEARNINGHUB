import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../plugin/Context";
import { useAuthStore } from "../../store/auth";

function BaseHeader() {
    const [cartCount, setCartCount] = useContext(CartContext);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = () => {
        navigate(`/search/?search=${searchQuery}`);
    };

    const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn, state.user]);


    return (
        <div>
            <nav
                className="navbar navbar-expand-lg  sticky-top"
                style={{
                    background: "#3b82f6",
                    transition: "all 0.5s ease-in-out",
                }}
            >
                <div className="container">
                    <Link
                        className="navbar-brand fw-bold text-uppercase text-white"
                        to="/"
                        style={{
                            fontSize: "1.8rem",
                            letterSpacing: "1px",
                            transition: "color 0.4s ease-in-out",
                            // marginTop:"2px"
                        }}
                    >
                        <img
                            src="../../../public/logo.png" // Replace with the actual path to your logo image
                            alt="Logo"
                            style={{
                                height: "50px", // Adjust height as needed
                                width: "auto",  // Maintain aspect ratio
                                transition: "transform 0.4s ease-in-out",
                                marginTop: "10px",
                                transform: "scale(1.1)", // Set scale by default to 1.1                                
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1.1)")}
                        />
                    </Link>

                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li
                                className="nav-item dropdown position-relative"
                                onMouseEnter={(e) => e.currentTarget.classList.add("show")}
                                onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
                            >
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        transition: "color 0.4s ease-in-out",
                                    }}
                                >
                                    <i className="fas fa-chalkboard-user"></i> Instructor
                                </a>
                                <ul className="dropdown-menu bg-white text-white border-0 shadow-lg show-on-hover">
                                    <li >
                                        <Link className="dropdown-item text-dark" to={`/instructor/dashboard/`}>
                                            <i className="bi bi-grid-fill"></i> Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/instructor/courses/`}>
                                            <i className="fas fa-shopping-cart"></i> My Courses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/instructor/create-course/`}>
                                            <i className="fas fa-plus"></i> Create Course
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/instructor/profile/`}>
                                            <i className="fas fa-gear"></i> Profile & Settings
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="nav-item dropdown position-relative"
                                onMouseEnter={(e) => e.currentTarget.classList.add("show")}
                                onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
                            >
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        transition: "color 0.4s ease-in-out",
                                    }}
                                >
                                    <i className="fas fa-graduation-cap"></i> Student
                                </a>
                                <ul className="dropdown-menu bg-white text-white border-0 shadow-lg show-on-hover">
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/student/dashboard/`}>
                                            <i className="bi bi-grid-fill"></i> Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/student/courses/`}>
                                            <i className="fas fa-shopping-cart"></i> My Courses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/student/wishlist/`}>
                                            <i className="fas fa-heart"></i> Wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to={`/student/profile/`}>
                                            <i className="fas fa-gear"></i> Profile & Settings
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center" role="search">
                            <button
                                onClick={handleSearchSubmit}
                                className="btn btn-outline-light ms-2 px-4 shadow-sm"
                                type="submit"
                                style={{
                                    borderRadius: "30px",
                                    transition: "background-color 0.3s ease, transform 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#8f94fb";
                                    e.target.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "";
                                    e.target.style.transform = "translateY(0)";
                                }}
                            >
                                Search <i className="fas fa-search"></i>
                            </button>
                        </div>
                        {isLoggedIn() === true ? (
                            <>
                                <Link
                                    to="/logout/"
                                    className="btn btn-light ms-3 px-4 py-2 shadow-sm"
                                    type="submit"
                                    style={{
                                        borderRadius: "30px",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
                                    onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
                                >
                                    Logout <i className="fas fa-sign-out-alt"></i>
                                </Link>
                                <Link
                                    className="btn btn-success ms-3 px-4 py-2 shadow-sm bg-white text-dark"
                                    to="/cart/"
                                    style={{
                                        borderRadius: "30px",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
                                    onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
                                >
                                    Cart ({cartCount}) <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login/"
                                    className="btn btn-light ms-3 px-4 py-2 shadow-sm"
                                    type="submit"
                                    style={{
                                        borderRadius: "30px",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
                                    onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
                                >
                                    Login <i className="fas fa-sign-in-alt"></i>
                                </Link>
                                <Link
                                    to="/register/"
                                    className="btn btn-light ms-3 px-4 py-2 shadow-sm"
                                    type="submit"
                                    style={{
                                        borderRadius: "30px",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
                                    onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
                                >
                                    Register <i className="fas fa-user-plus"></i>
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            </nav>
            <style>
                
            </style>
        </div>

    );
}

export default BaseHeader;
