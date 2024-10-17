// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="flex justify-center p-4 bg-gray-800 text-white">
//       <nav className="flex space-x-10">
//         <Link href="/">Home</Link>
//         <Link href="about/">About</Link>
//         <Link href="contact/">Contact</Link>
//       </nav>
//     </div>
//   );
// };
// export default Navbar;



import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center p-4 bg-gray-800 text-white">
      <nav className="flex space-x-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;

