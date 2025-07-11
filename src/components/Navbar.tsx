import { NavLink } from "react-router";
import logo from "../assets/icons/bucor-logo.png";
import { useState } from "react";
import { RegisterModal } from "./RegisterModal";
import { LoginModal } from "./LoginModal";

export const Navbar: React.FC = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <nav className="bg-landing flex items-center justify-between px-10 py-6">
        {/* Left Logo and Title */}
        <div className="flex items-center space-x-6">
          <img
            src={logo}
            alt="BuCor Logo"
            className="h-20 w-20 object-contain"
          />
          <div className="text-base leading-tight">
            <p className="text-sm">Republic of the Philippines</p>
            <h1 className="inline-block border-b-2 border-black font-serif text-2xl font-bold">
              Bureau of Corrections
            </h1>
            <p className="text-sm italic">“Bagong BuCor sa Bagong Pilipinas”</p>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="relative flex space-x-10 border-b-2 text-lg font-medium">
          {/* Home with Dropdown */}
          <div
            className="relative px-4 py-2 hover:bg-gray-300"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
          >
            <NavLink to="/Home" className="cursor-pointer pb-2 font-bold">
              Home
            </NavLink>
            {/* Dropdown */}
            {isHomeHovered && (
              <div className="absolute left-0 z-50 mt-2 w-32 bg-gray-100 shadow-md">
                <button
                  onClick={() => {
                    setShowRegisterModal(true);
                    setShowLoginModal(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                >
                  Register
                </button>
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setShowRegisterModal(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                >
                  Login
                </button>
              </div>
            )}
          </div>

          {/* Other links */}
          {["About", "Contacts"].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                `px-4 py-2 transition duration-200 ${isActive ? "font-bold" : ""}`
              }
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Show modal if triggered */}
      {showRegisterModal && (
        <RegisterModal
          onClose={() => setShowRegisterModal(false)}
          onSwitchToLogin={() => {
            setShowLoginModal(true);
            setShowRegisterModal(false);
          }}
        />
      )}

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSwitchToRegister={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}
    </>
  );
};
