import React from 'react'

const Footer = () => {
    return (

<footer className="bg-gray-200 py-4 text-center fixed bottom-0 w-full">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        </div>
        </footer>
    );
  };
  
  export default Footer;