import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 
                      grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex items-center justify-center">

        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">FLONE.</h1>
          <p className="text-gray-500 text-sm">© 2026 Flone.</p>
          <p className="text-gray-500 text-sm">All Rights Reserved</p>
        </div>

        {/* About */}
        <div>
          <h2 className="font-semibold mb-4">ABOUT US</h2>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Store Location</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Orders Tracking</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-semibold mb-4">USEFUL LINKS</h2>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-black cursor-pointer">Returns</li>
            <li className="hover:text-black cursor-pointer">Support Policy</li>
            <li className="hover:text-black cursor-pointer">Size Guide</li>
            <li className="hover:text-black cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-semibold mb-4">FOLLOW US</h2>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-black cursor-pointer">Facebook</li>
            <li className="hover:text-black cursor-pointer">Twitter</li>
            <li className="hover:text-black cursor-pointer">Instagram</li>
            <li className="hover:text-black cursor-pointer">YouTube</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="font-semibold mb-4">SUBSCRIBE</h2>
          <p className="text-gray-500 text-sm mb-4">
            Get email updates about our latest shop and special offers.
          </p>

          <div className="flex border-b border-gray-400 w-2/1 lg:w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none py-2 text-sm"
            />
            <button className="text-sm font-semibold hover:text-black transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;