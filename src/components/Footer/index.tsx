import React from 'react'

const index = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechSolutions</h3>
            <p className="opacity-70">
              Providing cutting-edge digital solutions for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 opacity-70">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>Maintenance & Support</li>
              <li>Data Analytics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 opacity-70">
              <li>About Us</li>
              <li>Careers</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic opacity-70">
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-2">info@techsolutions.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center opacity-70">
          <p>
            © {new Date().getFullYear()} TechSolutions. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default index