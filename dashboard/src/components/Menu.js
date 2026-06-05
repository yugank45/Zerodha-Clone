import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  const location = useLocation();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState(false);

  // SAFE USER PARSE
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href =
      "https://zerodha-omega-mocha.vercel.app/login";
  };

  // MENU ACTIVE CLASS
  const getMenuClass = (path) => {
    return location.pathname === path
      ? "menu-selected"
      : "menu";
  };

  return (
    <div className="menu-container">

      {/* LOGO */}

      <img
        src="logo.png"
        alt="logo"
        style={{ width: "50px" }}
      />

      <div className="menus">

        {/* MENU LINKS */}

        <ul>

          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <p className={getMenuClass("/")}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={getMenuClass(
                  "/orders"
                )}
              >
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={getMenuClass(
                  "/holdings"
                )}
              >
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={getMenuClass(
                  "/positions"
                )}
              >
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={getMenuClass(
                  "/funds"
                )}
              >
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={getMenuClass(
                  "/apps"
                )}
              >
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* PROFILE SECTION */}

        <div className="profile-section">

          <div
            className="profile"
            onClick={() =>
              setIsProfileDropdownOpen(
                !isProfileDropdownOpen
              )
            }
          >
            <div className="avatar">
              {user?.username
                ? user.username
                    .substring(0, 2)
                    .toUpperCase()
                : "ZU"}
            </div>

            <p className="username">
              {user?.username || "USER"}
            </p>
          </div>

          {/* DROPDOWN */}

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">

              <p className="dropdown-item">
                {user?.email ||
                  "No Email"}
              </p>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Menu;