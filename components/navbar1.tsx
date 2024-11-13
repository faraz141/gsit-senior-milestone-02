// 'use client';
// import Link from 'next/link';
// import React, { useState } from 'react';

// const Index = () => {
//   const [menuData, setMenuData] = useState(false);
//   const toggleMenu = () => {
//     setMenuData((prevMenuData) => !prevMenuData);
//   };
//   return (
//     <div>
//       <nav className="flex justify-between items-center bg-gray-950 h-20 text-white">
//         <Link className="m-4 font-semibold text-xl text-yellow-300" href={'/'}>
//           Website Name
//         </Link>
//         <div
//           className="menu md:hidden flex flex-col justify-between w-9 h-8 cursor-pointer"
//           onClick={toggleMenu}
//         >
//           <span className="block h-1 w-full bg-white rounded-sm transition-colors duration-300"></span>
//           <span className="block h-1 w-full bg-white rounded-sm transition-colors duration-300"></span>
//           <span className="block h-1 w-full bg-white rounded-sm transition-colors duration-300"></span>
//         </div>
//         <ul
//           className={`flex gap-4 transition-transform duration-300 md:flex-row items-center md:static ${
//             menuData
//               ? 'flex flex-col absolute top-full left-0 w-full bg-gray-900'
//               : 'hidden md:flex'
//           }`}
//         >
//           <li className="hover:bg-yellow-500 hover:text-black hover:rounded-2xl p-4">
//             <Link
//               href={'/'}
//               onClick={() => {
//                 if (menuData) {
//                   toggleMenu();
//                 }
//               }}
//             >
//               Home
//             </Link>
//           </li>
//           <li className="hover:bg-yellow-500 hover:text-black hover:rounded-2xl p-4">
//             <Link
//               href={'/'}
//               onClick={() => {
//                 if (menuData) {
//                   toggleMenu();
//                 }
//               }}
//             >
//               About
//             </Link>
//           </li>
//           <li className="hover:bg-yellow-500 hover:text-black hover:rounded-2xl p-4">
//             <Link
//               href={'/'}
//               onClick={() => {
//                 if (menuData) {
//                   toggleMenu();
//                 }
//               }}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Index;
