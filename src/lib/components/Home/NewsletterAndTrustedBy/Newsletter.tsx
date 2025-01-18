/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import ButtonNewsletter from '@/lib/components/Home/NewsletterAndTrustedBy/ButtonNewsletter';
import { NewsletterData } from '@/lib/components/models/Home/Newsletter';

const { title, label } = NewsletterData;

export default function Newsletter() {
  return (
    <div className="h-full xl:h-[270px] 2xl:h-[600px]">
      <form className="relative bottom-0 w-full p-5 lg:p-32 xl:bottom-[250px]">
        <h1 className="mt-10 text-center text-2xl lg:mt-0 lg:text-left">
          {title.name}
        </h1>
        <div className="mt-5 grid gap-5">
          <div className="relative mt-2 w-full">
            <input
              type="name"
              id="name"
              className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
              placeholder=" "
            />
            <label
              htmlFor="email_address"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
            >
              {label.name}
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              id="email"
              className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
            >
              {label.email}
            </label>
          </div>
          <ButtonNewsletter />
        </div>
      </form>
    </div>
  );
}

// /* eslint-disable no-console */
// /* eslint-disable react/button-has-type */
// /* eslint-disable jsx-a11y/label-has-associated-control */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable @next/next/no-img-element */

// 'use client';

// import type React from 'react';
// import { useState } from 'react';

// import ButtonNewsletter from '@/lib/components/Home/NewsletterAndTrustedBy/ButtonNewsletter';
// import { NewsletterData } from '@/lib/components/models/Home/Newsletter';

// const { title, label } = NewsletterData;

// export default function Newsletter() {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     console.log('Form data submitted for confirmation.');
//   };

//   return (
//     <div className="h-full xl:h-[270px] 2xl:h-[600px]">
//       <form
//         className="relative bottom-0 w-full p-5 lg:p-32 xl:bottom-[250px]"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <h1 className="mt-10 text-center text-2xl lg:mt-0 lg:text-left">
//           {title.name}
//         </h1>
//         <div className="mt-5 grid gap-5">
//           <div className="relative mt-2 w-full">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
//               placeholder=" "
//             />
//             <label
//               htmlFor="name"
//               className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
//               style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
//             >
//               {label.name}
//             </label>
//           </div>
//           <div className="relative mt-2 w-full">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
//               placeholder=" "
//             />
//             <label
//               htmlFor="email"
//               className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
//               style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
//             >
//               {label.email}
//             </label>
//           </div>
//           <ButtonNewsletter formData={formData} onSubmit={handleSubmit} />
//         </div>
//       </form>
//     </div>
//   );
// }
