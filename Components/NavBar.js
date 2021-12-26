import { parseCookies } from "nookies";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import styles from "../styles/search.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NavBar = () => {
  let router = useRouter();

  const cook = parseCookies();
  const user = cook.user ? JSON.stringify(cook.user) : "";
  // const userE = cook.userE ? JSON.stringify(cook.userE) : "";
  const userR = cook.userR ? JSON.stringify(cook.userR) : "";

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link href="/">
            <a className="navbar-brand">
              <span>Mark 3</span>
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link href="/">
                  <a className="nav-link active">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/AllProducts">
                  <a className="nav-link">All Product</a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle yen"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link href="/men">
                      <a className="dropdown-item yen">{"Men's"}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/women">
                      <a className="dropdown-item yen">{"Women's"}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kids">
                      <a className="dropdown-item yen">{"Kid's"}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/watch">
                      <a className="dropdown-item yen">{"Watch"}</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>

              

              {!user ? (
                <>
                  <li className="nav-item">
                    <Link href="/Login">
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Signin">
                      <a className="nav-link">Signup</a>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link yen"
                      onClick={() => {
                        toast.success("Logged Out", {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                        cookie.remove("token");
                        cookie.remove("user");
                        cookie.remove("userE");
                        cookie.remove("userR");

                        const timer = setTimeout(() => {
                          router.push("/");
                        }, 0.5);
                        return () => clearTimeout(timer);
                      }}
                    >
                      LOGOUT
                    </a>
                  </li>
                </>
              )}
            </ul>
            <div className="user_option-box">
              {user ? (
                <Link href="/Account">
                  <a>
                    <i className="fa fa-user" aria-hidden="true" />
                  </a>
                </Link>
              ) : (
                ""
              )}
              <Link href="/Cart">
                <a>
                  <i className="fa fa-cart-plus" aria-hidden="true" />
                </a>
              </Link>

              <a></a>

              <Link href="/Search">
            <a >
              <i className="fa fa-search" aria-hidden="true" />
            </a>
              </Link>

              <ToastContainer />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

// <button type="submit" className="btn btn-danger"><a className="sub">LOGOUT</a></button>
